import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/UserModel.js";
import Channel from "../models/ChannelModel.js";
import Video from "../models/VideoModel.js";

dotenv.config();

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected for seeding");

    await User.deleteMany();
    await Channel.deleteMany();
    await Video.deleteMany();

    const testUser = await User.create({
      username: "testuser",
      email: "test@example.com",
      password: "test1234"
    });

    const testChannel = await Channel.create({
      channelName: "Test Channel",
      description: "A test channel for dummy videos",
      owner: testUser._id,
      subscribers: 0
    });

    const dummyVideos = [
      {
        title: "Getting Started with React",
        thumbnailUrl: "https://i.ytimg.com/vi/dGcsHMXbSOA/maxresdefault.jpg",
        description: "Learn React basics in 10 minutes",
        videoUrl: "https://www.youtube.com/watch?v=dGcsHMXbSOA",
        category: "Education",
        channelId: testChannel._id,
        uploader: testUser._id,
        views: 1000,
        likes: 50
      },
      {
        title: "Building a REST API with Node.js",
        thumbnailUrl: "https://i.ytimg.com/vi/fsCjFHuLFjU/maxresdefault.jpg",
        description: "Complete guide to building APIs",
        videoUrl: "https://www.youtube.com/watch?v=fsCjFHuLFjU",
        category: "Programming",
        channelId: testChannel._id,
        uploader: testUser._id,
        views: 5000,
        likes: 200
      },
      {
        title: "CSS Grid Layout Tutorial",
        thumbnailUrl: "https://i.ytimg.com/vi/9zBsdzdE4sM/maxresdefault.jpg",
        description: "Master CSS Grid in one video",
        videoUrl: "https://www.youtube.com/watch?v=9zBsdzdE4sM",
        category: "Web Design",
        channelId: testChannel._id,
        uploader: testUser._id,
        views: 2500,
        likes: 120
      },
      {
        title: "Learn JavaScript in 1 Hour",
        thumbnailUrl: "https://i.ytimg.com/vi/W6NZfCO5SIk/maxresdefault.jpg",
        description: "JavaScript essentials for beginners",
        videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
        category: "Programming",
        channelId: testChannel._id,
        uploader: testUser._id,
        views: 8000,
        likes: 300
      },
      {
        title: "Python for Absolute Beginners",
        thumbnailUrl: "https://i.ytimg.com/vi/_uQrJ0TkZlc/maxresdefault.jpg",
        description: "Start your Python journey here",
        videoUrl: "https://www.youtube.com/watch?v=_uQrJ0TkZlc",
        category: "Programming",
        channelId: testChannel._id,
        uploader: testUser._id,
        views: 15000,
        likes: 950
      },
      {
        title: "Intro to MongoDB",
        thumbnailUrl: "https://i.ytimg.com/vi/Ofme2o29ngU/maxresdefault.jpg",
        description: "MongoDB tutorial for beginners",
        videoUrl: "https://www.youtube.com/watch?v=Ofme2o29ngU",
        category: "Database",
        channelId: testChannel._id,
        uploader: testUser._id,
        views: 2200,
        likes: 80
      },
      {
        title: "Responsive Web Design Basics",
        thumbnailUrl: "https://i.ytimg.com/vi/srvUrASNj0s/maxresdefault.jpg",
        description: "Make your sites mobile-friendly",
        videoUrl: "https://www.youtube.com/watch?v=srvUrASNj0s",
        category: "Web Design",
        channelId: testChannel._id,
        uploader: testUser._id,
        views: 4000,
        likes: 180
      },
      {
        title: "Tailwind CSS Crash Course",
        thumbnailUrl: "https://i.ytimg.com/vi/dFgzHOX84xQ/maxresdefault.jpg",
        description: "Build modern UIs with Tailwind CSS",
        videoUrl: "https://www.youtube.com/watch?v=dFgzHOX84xQ",
        category: "Frontend",
        channelId: testChannel._id,
        uploader: testUser._id,
        views: 6000,
        likes: 240
      },
      {
        title: "Build a Todo App with React",
        thumbnailUrl: "https://i.ytimg.com/vi/E1E08i2UJGI/maxresdefault.jpg",
        description: "Step-by-step React project",
        videoUrl: "https://www.youtube.com/watch?v=E1E08i2UJGI",
        category: "Projects",
        channelId: testChannel._id,
        uploader: testUser._id,
        views: 1200,
        likes: 90
      },
      {
        title: "Docker in 100 Seconds",
        thumbnailUrl: "https://i.ytimg.com/vi/Gjnup-PuquQ/maxresdefault.jpg",
        description: "What is Docker and how to use it",
        videoUrl: "https://www.youtube.com/watch?v=Gjnup-PuquQ",
        category: "DevOps",
        channelId: testChannel._id,
        uploader: testUser._id,
        views: 7000,
        likes: 310
      },
      {
        title: "Git and GitHub for Beginners",
        thumbnailUrl: "https://i.ytimg.com/vi/RGOj5yH7evk/maxresdefault.jpg",
        description: "Understand version control",
        videoUrl: "https://www.youtube.com/watch?v=RGOj5yH7evk",
        category: "Tools",
        channelId: testChannel._id,
        uploader: testUser._id,
        views: 5000,
        likes: 260
      },
      {
        title: "How the Internet Works",
        thumbnailUrl: "https://i.ytimg.com/vi/Dxcc6ycZ73M/maxresdefault.jpg",
        description: "Simple explanation for beginners",
        videoUrl: "https://www.youtube.com/watch?v=Dxcc6ycZ73M",
        category: "General",
        channelId: testChannel._id,
        uploader: testUser._id,
        views: 8800,
        likes: 470
      },
      {
        title: "React Router Tutorial",
        thumbnailUrl: "https://i.ytimg.com/vi/Law7wfdg_ls/maxresdefault.jpg",
        description: "How to use React Router v6",
        videoUrl: "https://www.youtube.com/watch?v=Law7wfdg_ls",
        category: "React",
        channelId: testChannel._id,
        uploader: testUser._id,
        views: 3600,
        likes: 160
      },
      {
        title: "Build a Portfolio Website",
        thumbnailUrl: "https://i.ytimg.com/vi/ldwlOzRvYOU/maxresdefault.jpg",
        description: "Step-by-step portfolio using HTML/CSS/JS",
        videoUrl: "https://www.youtube.com/watch?v=ldwlOzRvYOU",
        category: "Projects",
        channelId: testChannel._id,
        uploader: testUser._id,
        views: 3300,
        likes: 140
      },
      {
        title: "Redux Explained in 5 Minutes",
        thumbnailUrl: "https://i.ytimg.com/vi/poQXNp9ItL4/maxresdefault.jpg",
        description: "Understand Redux core concepts",
        videoUrl: "https://www.youtube.com/watch?v=poQXNp9ItL4",
        category: "React",
        channelId: testChannel._id,
        uploader: testUser._id,
        views: 4100,
        likes: 200
      },
      {
        title: "Top 5 VS Code Extensions",
        thumbnailUrl: "https://i.ytimg.com/vi/VqCgcpAypFQ/maxresdefault.jpg",
        description: "Boost your coding productivity",
        videoUrl: "https://www.youtube.com/watch?v=VqCgcpAypFQ",
        category: "Tools",
        channelId: testChannel._id,
        uploader: testUser._id,
        views: 9100,
        likes: 520
      },
      {
        title: "JavaScript Array Methods Explained",
        thumbnailUrl: "https://i.ytimg.com/vi/R8rmfD9Y5-c/maxresdefault.jpg",
        description: "map, filter, reduce & more",
        videoUrl: "https://www.youtube.com/watch?v=R8rmfD9Y5-c",
        category: "JavaScript",
        channelId: testChannel._id,
        uploader: testUser._id,
        views: 2500,
        likes: 130
      },
      {
        title: "TypeScript in 100 Seconds",
        thumbnailUrl: "https://i.ytimg.com/vi/zQnBQ4tB3ZA/maxresdefault.jpg",
        description: "Learn TypeScript super fast",
        videoUrl: "https://www.youtube.com/watch?v=zQnBQ4tB3ZA",
        category: "Programming",
        channelId: testChannel._id,
        uploader: testUser._id,
        views: 5200,
        likes: 290
      },
      {
        title: "Debugging in Chrome DevTools",
        thumbnailUrl: "https://i.ytimg.com/vi/H0XScE08hy8/maxresdefault.jpg",
        description: "Tips for frontend debugging",
        videoUrl: "https://www.youtube.com/watch?v=H0XScE08hy8",
        category: "Frontend",
        channelId: testChannel._id,
        uploader: testUser._id,
        views: 1800,
        likes: 95
      },
      {
        title: "Hosting with Netlify",
        thumbnailUrl: "https://i.ytimg.com/vi/2b4gs0T5zeE/maxresdefault.jpg",
        description: "Deploy sites easily",
        videoUrl: "https://www.youtube.com/watch?v=2b4gs0T5zeE",
        category: "Deployment",
        channelId: testChannel._id,
        uploader: testUser._id,
        views: 2700,
        likes: 145
      },
      {
        title: "Next.js Full Course",
        thumbnailUrl: "https://i.ytimg.com/vi/Sklc_fQBmcs/maxresdefault.jpg",
        description: "Full Next.js tutorial",
        videoUrl: "https://www.youtube.com/watch?v=Sklc_fQBmcs",
        category: "React",
        channelId: testChannel._id,
        uploader: testUser._id,
        views: 13400,
        likes: 870
      },
      {
        title: "Build an E-Commerce Site",
        thumbnailUrl: "https://i.ytimg.com/vi/UxJuv7IhD20/maxresdefault.jpg",
        description: "Step-by-step eCommerce project",
        videoUrl: "https://www.youtube.com/watch?v=UxJuv7IhD20",
        category: "Projects",
        channelId: testChannel._id,
        uploader: testUser._id,
        views: 7500,
        likes: 430
      },
      {
        title: "What is Webpack?",
        thumbnailUrl: "https://i.ytimg.com/vi/IZGNcSuwBZs/maxresdefault.jpg",
        description: "Learn Webpack fundamentals",
        videoUrl: "https://www.youtube.com/watch?v=IZGNcSuwBZs",
        category: "Tools",
        channelId: testChannel._id,
        uploader: testUser._id,
        views: 2100,
        likes: 100
      }
    ];

    await Video.insertMany(dummyVideos);
    console.log("Database seeded successfully!");

    await mongoose.disconnect();
  } catch (error) {
    console.error("Seeding error:", error);
    process.exit(1);
  }
};

seedDatabase();
