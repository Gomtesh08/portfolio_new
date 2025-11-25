# 🚀 Work Experience Section - Futuristic Animations

## ✨ Animation Features Implemented

### 1. **Timeline Orb Travel Animation** ⚡
- **Glowing orb** travels down the vertical timeline
- **Outer glow ring** pulses (scale 1 → 2 → 1)
- **Middle glow** with different pulse timing
- **Core orb** with cyan-to-blue gradient
- **Trailing particles** (4 particles following the orb)
- **Continuous loop** - travels from top to bottom (6s cycle)
- **Activates cards** as it passes each experience

### 2. **Visa2Fly Card - Airplane Animation** ✈️
- **Curved SVG path** - Airplane flies along a realistic arc
- **6-stage flight path**:
  - Starts far left-bottom (-800px, 200px)
  - Arcs upward and right
  - Peaks at top (-100px, -20px)
  - Gentle descent to final position
- **Rotation**: -45° → -20° → 5° → 15° → -5° → 0°
- **Scale**: 0.3x → 0.8x → 1.2x → 1.3x → 0.95x → 1x
- **Blur effect**: 20px → 0px (smooth focus)
- **Duration**: 4 seconds with custom easing
- **Continuous floating** after landing (gentle up/down motion)

### 3. **Visa2Fly Card - VISA Stamp Animation** 🎫
- **Dramatic entrance** from top-right (-300px, 150px)
- **8-stage bounce animation**:
  - Slams down with 2x scale
  - Bounces up (0.7x scale)
  - Multiple smaller bounces
  - Settles at final position
- **Rotation**: -180° → -45° → -12° (tilted stamp effect)
- **Blur**: 20px → 0px
- **Duration**: 2.5 seconds
- **Delay**: 4 seconds (after plane lands)
- **Continuous wobble** after landing

### 4. **Visa2Fly Card - Particle Effects** ✨
- **12 plane trail particles**:
  - Blue, cyan, purple, pink colors
  - Random scatter pattern
  - Continuous animation
  - Glow shadows
- **8 stamp impact sparks**:
  - Burst outward in 8 directions
  - Red/orange colors
  - Triggered when stamp lands
  - Fade out effect

### 5. **Infosys Card - Circuit Board Animation** 🔌
- **Neon circuit lines**:
  - 3 horizontal lines (animated left to right)
  - 2 vertical lines (animated top to bottom)
  - Orange gradient colors
  - Different animation speeds (2s, 2.5s, 3s)
- **Circuit nodes** (6 pulsing dots):
  - Positioned at line intersections
  - Pulse animation (opacity 0 → 1 → 0)
  - Scale animation (0 → 1.5 → 0)
  - Staggered delays
- **Electricity pulse border**:
  - Orange glow effect
  - Pulsing shadow (2s cycle)
  - Continuous animation
- **SVG gradients** for realistic circuit effect

### 6. **Timeline Glow & Light Trails** 💫
- **Vertical gradient line**:
  - Blue → Purple → Pink gradient
  - Glowing shadow effect
  - Scales from top (1.5s animation)
- **Flowing light trail #1**:
  - Blue-purple gradient
  - 20px blur effect
  - Travels top to bottom (4s cycle)
  - Fades in/out
- **Flowing light trail #2**:
  - Pink-purple gradient
  - Delayed by 2 seconds
  - Creates alternating pattern
  - Continuous loop

### 7. **Card Reveal Animations** 🎴
- **3D entrance effect**:
  - Starts 150px below, rotated -25° (X), -15° (Y)
  - Scale 0.8x with 10px blur
  - Smooth spring animation (1.2s)
- **Staggered bullet points**:
  - Each achievement fades in separately
  - 0.1s delay between items
  - Slide from left (-30px)
  - Scale 0.9x → 1x
- **Icon animations**:
  - Rotate 360° on hover
  - Scale 1.2x on hover
  - Glowing background pulse
- **Hover effects**:
  - Card scales to 1.05x
  - 3D rotation (5° on Y-axis)
  - Glowing border animation
  - Shadow pulse effect

### 8. **Floating Icons** 🎯
- **Briefcase icon** in each card:
  - Rotates 360° on hover (0.6s)
  - Gradient background glow
  - Green for current role, blue for past
- **Check icons** for achievements:
  - Rotate 360° on hover
  - Scale 1.2x on hover
  - Glowing blur effect
  - Smooth transitions

## 🎨 Design Elements

### Colors
- **Primary**: Blue (#3B82F6), Purple (#8B5CF6), Pink (#EC4899)
- **Visa2Fly**: Blue/Cyan theme
- **Infosys**: Orange (#F97316) circuit theme
- **Accents**: Green (current role), Cyan (orb)

### Effects
- **Glassmorphism**: backdrop-blur-xl, semi-transparent backgrounds
- **Neon glows**: box-shadow with color matching
- **Gradients**: Linear and radial gradients throughout
- **Blur effects**: Progressive blur for depth

### Timing
- **Plane flight**: 4 seconds
- **Stamp impact**: 2.5 seconds (delayed 4s)
- **Orb travel**: 6 seconds loop
- **Light trails**: 4 seconds loop
- **Circuit lines**: 2-3 seconds loop

## 🚀 Performance
- Uses Framer Motion for GPU-accelerated animations
- SVG for scalable graphics
- Optimized with `once: true` for one-time animations
- Conditional rendering based on viewport visibility

## 📱 Responsive
- All animations work on mobile, tablet, and desktop
- Timeline adjusts from left-aligned (mobile) to center (desktop)
- Cards stack vertically on mobile, alternate on desktop
- Particle counts optimized for performance

---

**Created with ❤️ using React, Framer Motion, Tailwind CSS, and SVG**

