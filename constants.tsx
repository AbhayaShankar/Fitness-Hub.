import {
  Drumstick,
  Dumbbell,
  Goal,
  KeyRound,
  Puzzle,
  Waypoints,
} from "lucide-react";

export const NavbarLinks = [
  {
    id: 0,
    href: "/",
    label: "Home",
  },
  {
    id: 1,
    href: "/about",
    label: "About",
  },
  {
    id: 2,
    href: "/gallery",
    label: "Gallery",
  },
  {
    id: 3,
    href: "/classes",
    label: "Classes",
  },
  {
    id: 4,
    href: "/pricing",
    label: "Pricing",
  },
  {
    id: 5,
    href: "/courses",
    label: "Courses",
  },
  {
    id: 6,
    href: "/contact",
    label: "Contact",
  },
];

export const TrainersList = [
  {
    id: 0,
    name: "Abhaya Shankar",
    type: "Powerlift Trainer",
    src: "/assets/trainer1.png",
  },
  {
    id: 1,
    name: "Abhaya Shankar",
    type: "Personal Trainer",
    src: "/assets/trainer2.png",
  },
  {
    id: 2,
    name: "Abhaya Shankar",
    type: "Yoga Trainer",
    src: "/assets/trainer3.png",
  },
];

export const GymCardList = [
  {
    id: 0,
    src: "/assets/gym1.png",
  },
  {
    id: 1,
    src: "/assets/gym2.png",
  },
  {
    id: 2,
    src: "/assets/gym3.png",
  },
  {
    id: 3,
    src: "/assets/gym4.png",
  },
  {
    id: 4,
    src: "/assets/gym5.png",
  },
  {
    id: 5,
    src: "/assets/gym6.png",
  },
];

export const classes = [
  {
    name: "Calisthenics",
  },
  {
    name: "Yoga",
  },
  {
    name: "Fitness",
  },
  {
    name: "Arm Wrestling",
  },
  {
    name: "Cardio",
  },
  {
    name: "Powerlifting",
  },
];

export const trainingHours = [
  {
    day: "Monday - Friday:",
    time: "6:30 AM - 9:00 PM",
  },
  {
    day: "Saturday:",
    time: "8:00 AM - 8:00 PM",
  },
  {
    day: "Sunday:",
    time: "Closed",
  },
];

export const AllClasses = [
  {
    id: 0,
    name: "Calisthenics",
    instructor: "Abhaya Shankar",
    timing: "Mon, Wed, Fri : 10:00 AM - 1:00 PM",
    imageUrl: "/assets/calisthenics.jpg",
  },
  {
    id: 1,
    name: "Yoga",
    instructor: "Abhaya Shankar",
    timing: "Tues, Thur : 8:00 AM - 10:00 AM",
    imageUrl: "/assets/yoga.jpg",
  },
  {
    id: 2,
    name: "Fitness",
    instructor: "Abhaya Shankar",
    timing: "Weekdays : 4:00 PM - 8:30 PM",
    imageUrl: "/assets/fitness.jpg",
  },
  {
    id: 3,
    name: "Arm Wrestling",
    instructor: "Abhaya Shankar",
    timing: "Mon, Fri : 6:00 PM - 9:00 PM",
    imageUrl: "/assets/armwrestle.jpg",
  },
  {
    id: 4,
    name: "Cardio",
    instructor: "Abhaya Shankar",
    timing: "Tues, Thur : 9:00 AM - 9:00 PM",
    imageUrl: "/assets/cycling.jpg",
  },
  {
    id: 5,
    name: "Powerlifting",
    instructor: "Abhaya Shankar",
    timing: "Weekdays : 9:00 AM - 8:00 PM",
    imageUrl: "/assets/powerlifting.jpg",
  },
];

export const STAGES_CARD = [
  {
    id: 0,
    title: "Goal",
    icon: Goal,
    desc: "Define your path, track your progress, and embrace the journey to a healthier, stronger you.",
    bgImgUrl: "/assets/goal.webp",
  },
  {
    id: 1,
    title: "Hardwork",
    icon: Dumbbell,
    desc: "Dedicated effort, Perseverence and Sweat - leads the way to unlocking your full potential. Embracing hard work in fitness leads to increased strength, endurance, and overall well-being. It's the path to a healthier, fitter you",
    bgImgUrl: "/assets/hardwork.jpg",
  },
  {
    id: 2,
    title: "Determination",
    icon: Puzzle,
    desc: "With a strong mindset and unwavering determination, one can overcome any challenge.",
    bgImgUrl: "/assets/determination.webp",
  },
  {
    id: 3,
    title: "Nutrition",
    icon: Drumstick,
    desc: "Proper food choices are the foundation of a healthier, more energetic you. It's about finding the right balance between macronutrients ",
    bgImgUrl: "/assets/nutrition.jpg",
  },
  {
    id: 4,
    title: "Consistency",
    icon: KeyRound,
    desc: "Consistency breeds success. Stay committed to your goals day in and day out, and watch your progress soar.",
    bgImgUrl: "/assets/consistency.jpg",
  },
  {
    id: 5,
    title: "Never Give Up",
    icon: Waypoints,
    desc: "In the face of adversity, resilience shines. Never forget why you started at the first place.",
    bgImgUrl: "/assets/never-give-up.webp",
  },
];
