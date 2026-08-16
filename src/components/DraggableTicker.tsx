"use client";

import React, { useState, useEffect, useRef, useCallback, type ReactNode } from "react";
import { motion, AnimatePresence, useAnimationFrame, useMotionValue, useSpring, type Variants, useInView, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { ArrowRight, ChevronRight, GraduationCap, BookOpen, Award, Sparkles, Compass } from "lucide-react";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaYoutube, FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import Lenis from "lenis";
import "swiper/css";
import "swiper/css/effect-fade";

// --- DraggableTicker.tsx ---
interface TickerProps {
  children?: React.ReactNode[];
  speed?: number; // pixels per second
  direction?: "left" | "right" | "up" | "down";
  align?: "start" | "center" | "end";
  gap?: number;
  padding?: number | string;
  sizing?: "hug" | "fill";
  clipping?: boolean;
  hoverSpeed?: number;
  draggable?: boolean;
  snapStrength?: number;
  dragResistance?: number;
  pausePlay?: boolean;
  buttonPosition?: "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";
  buttonColor?: string;
  buttonBackgroundColor?: string;
  itemHeight?: number;
  itemWidth?: number;
}

export function DraggableTicker(props: TickerProps) {
  const {
    children = [],
    speed = 100,
    direction = "left",
    align = "center",
    gap = 16,
    padding = 0,
    sizing = "hug",
    clipping = true,
    hoverSpeed = 25,
    draggable = true,
    snapStrength = .15,
    dragResistance = .5,
    pausePlay = false,
    buttonPosition = "top-right",
    buttonColor = "white",
    buttonBackgroundColor = "transparent",
    itemHeight = 350,
    itemWidth: propItemWidth = 300
  } = props;

  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const dragStartPos = useRef(0);
  const dragStartOffset = useRef(0);
  const velocity = useRef(0);
  const lastDragPos = useRef(0);
  const lastDragTime = useRef(0);
  const calculatedItemSize = useRef(0);
  const contentSize = useRef(0);
  const isSnapping = useRef(false);

  const isStatic = false; // Mocked for client-side execution
  const offset = useMotionValue(0);
  const smoothOffset = useSpring(offset, { stiffness: 400, damping: 40, mass: 1 });

  const isHorizontal = direction === "left" || direction === "right";
  const isReverse = direction === "right" || direction === "down";
  const currentSpeed = isHovered ? hoverSpeed : speed;

  const childrenArray = children ? (Array.isArray(children) ? children : [children]) : [];
  const duplicateCount = 4; // High duplicate count to fill screens vertically

  useEffect(() => {
    const itemSize = isHorizontal ? propItemWidth : itemHeight;
    calculatedItemSize.current = itemSize + gap;
    const singleSetSize = (itemSize + gap) * childrenArray.length;
    contentSize.current = singleSetSize;
    offset.set(-singleSetSize);
    smoothOffset.set(-singleSetSize);
  }, [childrenArray.length, isHorizontal, gap, itemHeight, propItemWidth, offset, smoothOffset]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!draggable || isStatic) return;
    e.preventDefault();
    const pos = isHorizontal ? e.clientX : e.clientY;
    setIsDragging(true);
    dragStartPos.current = pos;
    dragStartOffset.current = offset.get();
    lastDragPos.current = pos;
    lastDragTime.current = Date.now();
    velocity.current = 0;
  }, [draggable, isStatic, isHorizontal, offset]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || !draggable || isStatic) return;
    const currentPos = isHorizontal ? e.clientX : e.clientY;
    const currentTime = Date.now();
    const delta = (currentPos - dragStartPos.current) * dragResistance;
    const timeDelta = currentTime - lastDragTime.current;

    if (timeDelta > 0) {
      const posDelta = currentPos - lastDragPos.current;
      velocity.current = (posDelta / timeDelta) * 16;
    }
    lastDragPos.current = currentPos;
    lastDragTime.current = currentTime;
    const newOffset = dragStartOffset.current + delta;
    offset.set(newOffset);
  }, [isDragging, draggable, isStatic, isHorizontal, dragResistance, offset]);

  const handleMouseUp = useCallback(() => {
    if (!draggable || !isDragging) return;
    setIsDragging(false);

    if (calculatedItemSize.current > 0 && snapStrength > 0) {
      isSnapping.current = true;
      const currentOffset = offset.get();
      const velocityOffset = velocity.current * 10 * dragResistance;
      const targetOffset = currentOffset + velocityOffset;
      const nearestSnap = Math.round(targetOffset / calculatedItemSize.current) * calculatedItemSize.current;
      offset.set(nearestSnap);
      setTimeout(() => {
        isSnapping.current = false;
      }, 300);
    } else {
      isSnapping.current = false;
    }
  }, [draggable, isDragging, snapStrength, dragResistance, offset]);

  useEffect(() => {
    if (!draggable || isStatic) return;
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, draggable, isStatic, handleMouseMove, handleMouseUp]);

  useEffect(() => {
    if (isStatic) return;
    const unsubscribe = smoothOffset.on("change", (latest) => {
      if (contentRef.current) {
        const transform = isHorizontal ? `translate3d(${latest}px, 0px, 0px)` : `translate3d(0px, ${latest}px, 0px)`;
        contentRef.current.style.transform = transform;
      }
    });
    return () => unsubscribe();
  }, [smoothOffset, isHorizontal, isStatic]);

  useEffect(() => {
    if (isStatic || !contentRef.current) return;
    const unsubscribe = offset.on("change", (latest) => {
      if (contentRef.current && isDragging) {
        const transform = isHorizontal ? `translate3d(${latest}px, 0px, 0px)` : `translate3d(0px, ${latest}px, 0px)`;
        contentRef.current.style.transform = transform;
      }
    });
    return () => unsubscribe();
  }, [offset, isHorizontal, isStatic, isDragging]);

  useAnimationFrame((time, delta) => {
    if (isStatic || !contentRef.current || !containerRef.current || isDragging || isPaused || isSnapping.current) return;

    const totalSize = isHorizontal ? contentRef.current.scrollWidth : contentRef.current.scrollHeight;
    const singleSetSize = totalSize / duplicateCount;
    contentSize.current = singleSetSize;

    const pixelsPerSecond = currentSpeed;
    const deltaSeconds = delta / 1000;
    const movement = pixelsPerSecond * deltaSeconds;
    const currentOffset = offset.get();
    const newOffset = isReverse ? currentOffset + movement : currentOffset - movement;

    if (singleSetSize > 0) {
      if (Math.abs(newOffset) >= singleSetSize * 2) {
        const jumpOffset = newOffset + singleSetSize;
        offset.jump(jumpOffset);
        smoothOffset.jump(jumpOffset);
      } else if (newOffset >= 0) {
        const jumpOffset = newOffset - singleSetSize;
        offset.jump(jumpOffset);
        smoothOffset.jump(jumpOffset);
      } else {
        offset.set(newOffset);
      }
    }
  });

  const getAlignItems = () => {
    if (isHorizontal) {
      switch (align) {
        case "start": return "flex-start";
        case "center": return "center";
        case "end": return "flex-end";
        default: return "center";
      }
    }
    return "stretch";
  };

  const getJustifyContent = () => {
    if (!isHorizontal) {
      switch (align) {
        case "start": return "flex-start";
        case "center": return "center";
        case "end": return "flex-end";
        default: return "center";
      }
    }
    return "flex-start";
  };

  const duplicatedChildren = Array(duplicateCount).fill(childrenArray).flat();

  const containerStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    minWidth: "5px",
    minHeight: "5px",
    overflow: clipping ? "hidden" : "visible",
    position: "relative",
    padding: padding,
    cursor: draggable ? (isDragging ? "grabbing" : "grab") : "default",
    userSelect: draggable ? "none" : "auto"
  };

  const getButtonPosition = () => {
    switch (buttonPosition) {
      case "top-left": return { top: "10px", left: "10px" };
      case "top-center": return { top: "10px", left: "50%", transform: "translateX(-50%)" };
      case "top-right": return { top: "10px", right: "10px" };
      case "bottom-left": return { bottom: "10px", left: "10px" };
      case "bottom-center": return { bottom: "10px", left: "50%", transform: "translateX(-50%)" };
      case "bottom-right": return { bottom: "10px", right: "10px" };
      default: return { top: "10px", right: "10px" };
    }
  };

  return (
    <div
      ref={containerRef}
      style={containerStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={handleMouseDown}
    >
      {pausePlay && (
        <button
          onClick={() => setIsPaused(!isPaused)}
          style={{
            position: "absolute",
            ...getButtonPosition(),
            zIndex: 10,
            background: buttonBackgroundColor,
            color: buttonColor,
            border: `1px solid ${buttonColor}`,
            borderRadius: "20px",
            width: "40px",
            height: "40px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px"
          }}
          aria-label={isPaused ? "Play" : "Pause"}
        >
          {isPaused ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5v14l11-7L8 5z" fill={buttonColor} />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" fill={buttonColor} />
            </svg>
          )}
        </button>
      )}
      <div
        ref={contentRef}
        style={{
          display: "flex",
          flexDirection: isHorizontal ? "row" : "column",
          alignItems: getAlignItems(),
          justifyContent: getJustifyContent(),
          gap: gap,
          width: isHorizontal ? "max-content" : "100%",
          height: isHorizontal ? "100%" : "max-content",
          willChange: "transform"
        }}
      >
        {duplicatedChildren.map((child, index) => (
          <div
            key={index}
            style={{
              flexShrink: 0,
              width: isHorizontal ? "auto" : "100%",
              height: isHorizontal ? "100%" : "auto",
              display: "flex",
              alignItems: "stretch",
              justifyContent: "stretch"
            }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

