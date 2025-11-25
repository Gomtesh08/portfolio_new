# 🎬 Visa2Fly Experience Animation Guide

## 📍 Overview

The Visa2Fly Experience section features stunning scroll-triggered animations:
1. **Plane flies in** from the left with a smooth curved path
2. **Visa stamp appears** with a stamp-like bounce effect
3. **Content fades in** gracefully after the animations

---

## 🎨 Animation Sequence

### Timeline:
```
0.0s  → User scrolls to section
0.3s  → Plane starts flying in (2s duration)
2.2s  → Plane lands, Visa stamp starts appearing (0.8s duration)
2.8s  → Content fades in (0.8s duration)
3.0s+ → Achievement bullets appear one by one (0.2s apart)
```

---

## 🔧 Customization

### 1. Replace SVG Graphics

**Plane SVG:**
- Location: `frontend/public/plane.svg`
- Replace with your own plane illustration
- Recommended size: 200x200px viewBox
- Keep the same filename or update the component

**Visa Stamp SVG:**
- Location: `frontend/public/visa_stamp.svg`
- Replace with your own stamp design
- Recommended size: 200x200px viewBox
- Keep the same filename or update the component

### 2. Adjust Animation Timing

Edit `frontend/src/components/Visa2FlyExperience.jsx`:

```javascript
// Plane animation delay
delay: 0.3  // Change this value (in seconds)

// Visa stamp delay
delay: 2.2  // Change this value

// Content fade-in delay
delay: 2.8  // Change this value

// Achievement bullets delay
delay: 3.0 + (idx * 0.2)  // Base delay + stagger
```

### 3. Modify Animation Paths

**Plane Curved Path:**
```javascript
y: [80, -10, 0]  // Start, peak, end positions
// Adjust these values to change the curve
```

**Plane Horizontal Distance:**
```javascript
x: -400  // Starting position (negative = left)
// Increase for longer travel distance
```

### 4. Change Animation Easing

```javascript
ease: [0.34, 1.56, 0.64, 1]  // Custom cubic-bezier
// Or use presets: "easeIn", "easeOut", "easeInOut", "linear"
```

### 5. Adjust Stamp Bounce Effect

```javascript
scale: [0, 1.2, 1]  // Start, overshoot, settle
// Increase 1.2 to 1.3 for more bounce
```

---

## 📱 Responsive Behavior

### Desktop (md and above):
- Plane: 40x40 (w-40 h-40)
- Stamp: 40x40
- Positioned with absolute positioning

### Mobile (below md):
- Plane: 32x32 (w-32 h-32)
- Stamp: 32x32
- Adjusted positioning for smaller screens

### Customize Breakpoints:

```jsx
className="w-32 h-32 md:w-40 md:h-40"
//         Mobile ↑    Desktop ↑
```

---

## 🎯 Scroll Trigger Settings

```javascript
const isInView = useInView(ref, { 
  once: true,        // Animate only once
  margin: "-100px"   // Trigger 100px before entering viewport
});
```

**Adjust trigger point:**
- `margin: "-100px"` → Triggers earlier
- `margin: "0px"` → Triggers when section enters viewport
- `margin: "100px"` → Triggers before section is visible

---

## 🎨 Color Customization

### Background Gradient:
```jsx
className="bg-gradient-to-br from-blue-50 via-white to-purple-50 
           dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
```

### Current Position Badge:
```jsx
className="bg-gradient-to-r from-blue-600 to-purple-600"
```

### Decorative Blobs:
```jsx
className="bg-blue-200/20 dark:bg-blue-500/10"
```

---

## 🔄 Animation States

### Hidden State (before scroll):
- Plane: Off-screen left, rotated, scaled down
- Stamp: Scaled to 0, rotated -45°, invisible
- Content: Faded out, shifted down

### Visible State (after scroll):
- Plane: On-screen, level, full size
- Stamp: Full size, slight rotation, visible
- Content: Fully visible, in position

---

## 🚀 Performance Tips

1. **Use `once: true`** - Prevents re-animation on scroll
2. **Optimize SVGs** - Keep file sizes small
3. **Use `will-change`** - For smoother animations (already applied via Framer Motion)
4. **Reduce motion** - Respect user preferences (Framer Motion handles this)

---

## 🎭 Advanced Customization

### Add More Animation Steps:

```javascript
const planeVariants = {
  visible: {
    x: [0, 10, 0],  // Add a wobble at the end
    transition: {
      x: {
        times: [0, 0.9, 1],  // Timing for each keyframe
        duration: 2
      }
    }
  }
};
```

### Add Sound Effects:

```javascript
const handleAnimationComplete = () => {
  // Play stamp sound
  const audio = new Audio('/stamp-sound.mp3');
  audio.play();
};

<motion.div
  onAnimationComplete={handleAnimationComplete}
  // ... other props
/>
```

---

## 📝 Content Customization

Edit the achievements array in the component:

```javascript
const achievements = [
  "Your achievement 1",
  "Your achievement 2",
  "Your achievement 3"
];
```

---

## 🐛 Troubleshooting

**Animations not triggering?**
- Check if Framer Motion is installed: `npm list framer-motion`
- Verify scroll position triggers the `isInView` state

**Animations too fast/slow?**
- Adjust `duration` values in transition objects

**Plane/Stamp not visible?**
- Check SVG paths and viewBox dimensions
- Verify absolute positioning doesn't push elements off-screen

**Mobile layout issues?**
- Test responsive classes (w-32 md:w-40)
- Adjust absolute positioning for mobile breakpoints

---

## 📚 Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [SVG Optimization](https://jakearchibald.github.io/svgomg/)

---

**Enjoy your animated Visa2Fly experience section! ✈️🎉**

