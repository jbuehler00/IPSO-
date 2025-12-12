# Design Guidelines: AI Hospitality SaaS Landing Page

## Design Approach
**Minimal & Conversion-Focused**: Clean, professional landing page optimized for waitlist signups with understated elegance. Focus on clarity and ease of use over visual complexity.

## Core Design Elements

### Typography
- **Primary Font**: Inter or Roboto via Google Fonts
- **Headline**: Extra large, bold weight (48-64px desktop, 32-40px mobile)
- **Subheadline**: Medium size, regular weight (18-20px desktop, 16-18px mobile)
- **Form Labels**: Small, medium weight (14px)
- **Body Text**: Regular weight (16px)
- **Line Height**: 1.5 for readability

### Color Palette
- **Background**: Warm cream/sand (#F5F3EF or #FAF9F6)
- **Text Primary**: Deep charcoal (#2C2C2C)
- **Text Secondary**: Medium gray (#666666)
- **Accent**: Charcoal with slight warmth for buttons (#3D3D3D)
- **Input Borders**: Soft gray (#D4D4D4)
- **Input Focus**: Darker charcoal border (#2C2C2C)

### Layout System
- **Container**: Max-width 480px for form, centered
- **Spacing**: Use consistent padding units (16px, 24px, 32px, 48px)
- **Section Padding**: py-16 to py-24 for vertical rhythm
- **Form Input Spacing**: 16px between fields

## Component Specifications

### Hero Section
- **Structure**: Full-width, vertically centered content
- **Background**: Subtle hero image showing hospitality/AI context (modern hotel lobby, training session, or abstract tech visualization) with light overlay for text readability
- **Content Hierarchy**: Headline → Subheadline → Visual breathing room before form
- **Padding**: 80px top/bottom desktop, 48px mobile

### Signup Form
- **Container**: White background (#FFFFFF) with subtle shadow (0 4px 12px rgba(0,0,0,0.08))
- **Corner Radius**: 12px for form container, 8px for inputs
- **Padding**: 40px inside form container desktop, 24px mobile
- **Input Fields**:
  - Height: 48px
  - Border: 1px solid with rounded corners
  - Padding: 12px 16px
  - Focus state: Darker border, subtle shadow
- **Dropdown**: Same styling as text inputs with arrow indicator
- **Submit Button**:
  - Full width within form
  - Height: 56px for prominence
  - Rounded corners (8px)
  - Bold text
  - Strong hover state (slightly darker background)

### Form Field Order
1. Name (required asterisk)
2. Email (required asterisk)
3. Role (optional label)
4. Company (optional label)
5. Budget dropdown with question: "What price range would you consider reasonable for a tool like this?"

### Early Adopter Perks Section
- **Placement**: Below signup form
- **Design**: Simple list or cards showing first 10 signup benefits
- **Background**: Slightly darker sand/cream than hero (#EBE9E5)
- **Padding**: 64px vertical
- **Layout**: Single column, centered, max-width 600px

## Images
- **Hero Background Image**: Hospitality/AI themed (suggested: modern hotel reception desk with digital elements, or abstract AI training visualization). Image should be high quality, subtly blurred or overlaid to maintain text readability. Aspect ratio: 16:9 or wider for desktop hero coverage.

## Responsive Behavior
- **Desktop (>768px)**: Full hero section, form at 480px max-width, generous spacing
- **Mobile (<768px)**: Stack elements vertically, reduce padding, maintain form readability at 100% width with side margins

## Accessibility
- Proper label/input associations
- Required field indicators (*)
- Clear focus states on all interactive elements
- Sufficient color contrast (WCAG AA minimum)

## Key Customization Points
All placeholder text in hero section is easily replaceable. Color variables should be centralized for easy theme adjustments. Form styling is modular for quick backend integration.