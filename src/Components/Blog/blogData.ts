// src/blogData.ts

export interface BlogPost {
  title: string;
  excerpt?: string;
  link: string;
  image: string;
  tag: string;
  readTime: string;
  date: string;
  author?: {
    name: string;
    avatar: string;
  };
}

export interface BlogCategory {
  name: string;
  description: string;
  icon: string;
  link: string;
  posts: BlogPost[];
}

export const blogData = {
  featured: {
    title: "How to Create a Restaurant Website That Grows Your Online Orders",
    excerpt: "Discover easy ways to build a website that attracts more customers to your restaurant.",
    link: "/blog/how-to-create-a-restaurant-website",
    image: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668966d3fccc868fedb1bb52_65d916035699338c5f96c095_create-a-restaurant-website-thumbnail.jpeg",
    tag: "FEATURED",
    readTime: "15 min read",
    date: "February 26, 2024",
    author: {
      name: "Adam Guild",
      avatar: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/66bbc3a4a97d06e4b8c0f371_adam-profile%20(1).jpg"
    }
  },
  recent: [
    {
      title: "7 Local SEO Tips To Effectively Grow Your Restaurant's Exposure",
      link: "/blog/local-seo-for-restaurants",
      image: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668966d5c0bff26f387d10a7_65fa226bbd12be91483ed554_local-seo-for-restaurants-thumbnail.jpeg",
      tag: "Increase Online Sales",
      readTime: "10 min read",
      date: "April 8, 2025"
    },
    {
      title: "7 Best Restaurant Online Ordering Systems to Drive Sales in 2025",
      link: "/blog/online-ordering-system-for-restaurants",
      image: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668966dbdff089fb419e974d_65f30e22dfe5f0da1c1f3ea7_best-online-ordering-system-thumb.jpeg",
      tag: "Restaurant Software",
      readTime: "11 min read",
      date: "November 20, 2024"
    },
    {
      title: "Restaurant SEO is Easier Than You Think (3 Big Wins)",
      link: "/blog/seo-for-restaurants",
      image: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668966ecbd62250ed5efb13a_65cdd9ebce2cb290e2a61191_seo-for-restaurants-thumbnail.jpeg",
      tag: "Marketing Strategy",
      readTime: "22 min read",
      date: "May 6, 2024"
    }
  ],
  mostRecent: [
    {
      title: "8 Best Cafe and Coffee Shop POS Systems for Brewing Up More Sales",
      link: "/blog/cafe-pos",
      image: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/6862c5805423b1afc5a7bc2a_cafe-pos-hero.jpg",
      tag: "Restaurant Software",
      readTime: "15 min read",
      date: "June 30, 2025"
    },
    {
      title: "10 Best Square Alternatives and POS Competitors Worth Switching To for More Profits",
      link: "/blog/square-alternatives",
      image: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/6862bc69f8a34b0a9102e493_square-alternatives-hero.jpg",
      tag: "Restaurant Software",
      readTime: "19 min read",
      date: "June 30, 2025"
    },
    {
      title: "Best Pizza POS Systems of 2025: Top Picks To Make More Dough",
      link: "/blog/pizza-pos-system",
      image: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/6862a45ff0914ff30bc177c7_pizza-pos-system-thumbnail.jpg",
      tag: "Restaurant Software",
      readTime: "32 min read",
      date: "June 30, 2025"
    }
  ],
  trending: [
    {
      title: "Restaurant Marketing Plan: A Step-by-Step Guide (With Strategies for Any Budget)",
      link: "/blog/how-to-create-a-restaurant-marketing-plan",
      image: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668966d30df3402b68f9d756_653031e3c2e5918f867b3ee4_Restaurant-marketing-plan-900x675-1-698x468.jpeg",
      tag: "Marketing Strategy",
      readTime: "17 min read",
      date: "June 18, 2025"
    },
    {
      title: "7 Local SEO Tips To Effectively Grow Your Restaurant's Exposure",
      link: "/blog/local-seo-for-restaurants",
      image: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668966d5c0bff26f387d10a7_65fa226bbd12be91483ed554_local-seo-for-restaurants-thumbnail.jpeg",
      tag: "Increase Online Sales",
      readTime: "10 min read",
      date: "April 8, 2025"
    },
    {
      title: "Restaurant Email Marketing: 8 Proven Campaigns To Drive More Sales",
      link: "/blog/email-marketing-for-restaurants",
      image: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/669087f92b8bcbe87b8a33f1_653031de3785620867bd28fb_email-marketing-restaurant.jpeg",
      tag: "Marketing Strategy",
      readTime: "17 min read",
      date: "March 25, 2025"
    },
    {
      title: "Best Restaurant Website Builders To Drive Sales [2025]",
      link: "/blog/website-builders-for-restaurants",
      image: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668966f0542d420b9568639d_65b96a0a391aa6e750d472f4_choosing-the-best-restaurant-website-builder.jpeg",
      tag: "Restaurant Software",
      readTime: "15 min read",
      date: "March 24, 2025"
    },
    {
      title: "How to Do Restaurant Marketing: Strategies for Growth and Success",
      link: "/blog/restaurant-marketing",
      image: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668966ec763b960460802f61_6627d626a3d71c67792ad9e2_restaurant-marketing-thumbnail.jpeg",
      tag: "Marketing Strategy",
      readTime: "14 min read",
      date: "March 18, 2025"
    }
  ],
  categories: [
    {
      name: "Increase Online Sales",
      description: "Grow your restaurant's online sales with these ideas.",
      icon: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/6689394d94c94af826197e94_65b1509b4e6fb6c92b71de84_increase_sales.svg",
      link: "/blog-category/increase-sales",
      posts: [
        {
          title: "18 Proven Restaurant Promotion Ideas That Work in 2025",
          link: "/blog/restaurant-promotion-ideas",
          image: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/669087ffdbd50623f6f0a4fd_65d6930ebc9d0401f75a0276_restaurant-promotion-thumbnail.jpeg",
          tag: "Increase Online Sales",
          readTime: "15 min. read",
          date: "February 22, 2024"
        },
        {
          title: "7 Local SEO Tips To Effectively Grow Your Restaurant's Exposure",
          link: "/blog/local-seo-for-restaurants",
          image: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668966d5c0bff26f387d10a7_65fa226bbd12be91483ed554_local-seo-for-restaurants-thumbnail.jpeg",
          tag: "Increase Online Sales",
          readTime: "10 min read",
          date: "April 8, 2025"
        },
        {
          title: "Restaurant Costs Breakdown: Spend Smarter To Stay Profitable",
          link: "/blog/restaurant-costs",
          image: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/66f5e2795051d76df7a4f5ec_restaurant-cost-hero.jpg",
          tag: "Increase Online Sales",
          readTime: "10 min read",
          date: "April 8, 2025"
        }
      ]
    },
    {
      name: "Restaurant Software",
      description: "Get to know restaurant tech that can upgrade your operations and bring your sales to the next level.",
      icon: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/6689394dc9cbde9348f56aaf_65b150a9c1073bf8f91bfbd1_apps.svg",
      link: "/blog-category/restaurant-software",
      posts: [
        {
          title: "Best POS System for Restaurants: Compare Features & Pricing for 2025",
          link: "/blog/best-pos-system-for-restaurants",
          image: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/67ae6ff5a4a8aaaa983b6c9a_cafe-owner-using-point-of-sale-system.jpg",
          tag: "Restaurant Software",
          readTime: "15 min read",
          date: "February 13, 2025"
        },
        {
          title: "7 Best Restaurant Online Ordering Systems to Drive Sales in 2025",
          link: "/blog/online-ordering-system-for-restaurants",
          image: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668966dbdff089fb419e974d_65f30e22dfe5f0da1c1f3ea7_best-online-ordering-system-thumb.jpeg",
          tag: "Restaurant Software",
          readTime: "11 min read",
          date: "November 20, 2024"
        },
        {
          title: "Best Restaurant Website Builders To Drive Sales [2025]",
          link: "/blog/website-builders-for-restaurants",
          image: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668966f0542d420b9568639d_65b96a0a391aa6e750d472f4_choosing-the-best-restaurant-website-builder.jpeg",
          tag: "Restaurant Software",
          readTime: "11 min read",
          date: "November 20, 2024"
        }
      ]
    },
    {
      name: "Marketing Strategy",
      description: "Proven marketing best practices for restaurant owners that want to grow their business.",
      icon: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/6689394dbd62250ed5d2dfd1_65b150c2221d11aff04db3aa_marketing.svg",
      link: "/blog-category/marketing-strategy",
      posts: [
        {
          title: "197 Best Pizzeria Slogans You Can Use For Free",
          link: "/blog/197-best-pizzeria-slogans-you-can-use-for-free-2019",
          image: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/669087f521d840679c78e3ce_653031dca2d0a6f85592191a_Header-Sizzle-Pie-698x468.jpeg",
          tag: "Marketing Strategy",
          readTime: "14 min read",
          date: "October 18, 2023"
        },
        {
          title: "10 Best Restaurant Loyalty Programs: Examples That Actually Work and Drive Sales",
          link: "/blog/restaurant-loyalty-programs",
          image: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/66a98b2d66d840cb74ac010c_person-exploring-restaurant-loyalty-programs.jpg",
          tag: "Marketing Strategy",
          readTime: "22 min. read",
          date: "March 19, 2025"
        },
        {
          title: "97 Best Pizza Captions for Instagram",
          link: "/blog/97-best-pizza-captions-for-instagram",
          image: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/669087f518b1187ab92d4eb3_653031df43f70c3cd469c23c_Pizza-Header-698x468.png",
          tag: "Marketing Strategy",
          readTime: "22 min. read",
          date: "March 19, 2025"
        }
      ]
    },
    {
      name: "Restaurant Websites",
      description: "Learn how to build a restaurant website that drives direct orders.",
      icon: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/6689394d5be71fefe2aa0a20_65b150dcf04947acd6abb925_website.svg",
      link: "/blog-category/restaurant-websites",
      posts: [
        {
          title: "The 11 Best Restaurant Websites That Drive Results",
          link: "/blog/best-restaurant-websites",
          image: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668966c715980610243d0ed8_65cceb66d7f5eb3e32bee053_best-restaurant-websites-thumbnail.jpeg",
          tag: "Restaurant Websites",
          readTime: "12 min. read",
          date: "April 4, 2025"
        },
        {
          title: "21 Best Pizza Websites & Profitable Features [2025]",
          link: "/blog/best-pizza-websites",
          image: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668966c6b3096e80b5494735_6671e3853f501042ba83341b_best-pizza-websites-hero.jpeg",
          tag: "Restaurant Websites",
          readTime: "15 minute read",
          date: "June 18, 2024"
        },
        {
          title: "How to Create a Restaurant Website That Grows Your Online Orders",
          link: "/blog/how-to-create-a-restaurant-website",
          image: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/668966d3fccc868fedb1bb52_65d916035699338c5f96c095_create-a-restaurant-website-thumbnail.jpeg",
          tag: "Restaurant Websites",
          readTime: "15 minute read",
          date: "June 18, 2024"
        }
      ]
    },
    {
      name: "Industry Trends & Data",
      description: "Get up to speed on the what's happening in the restaurant industry.",
      icon: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/6689394dc2c9b8f3d5437fbd_65b1510490cdda4ce37d7248_industry.svg",
      link: "/blog-category/industry-trends-data",
      posts: [
        {
          title: "New Data: Why Guests Choose Third-Party Apps Over Direct Ordering (And How to Win Them Back)",
          link: "/blog/third-party-vs-direct-ordering",
          image: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/67a24648a300207676ea7e1d_hero-image.jpg",
          tag: "Industry Trends & Data",
          readTime: "5 min",
          date: "January 15, 2025"
        },
        {
          title: "Here Are the Food Trends 2025 Is Serving Up and How To Use Them in Your Restaurant",
          link: "/blog/food-trends",
          image: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/6825283a7a066f1fa5c015d8_food-trends-hero.jpg",
          tag: "Industry Trends & Data",
          readTime: "16 min read",
          date: "May 15, 2025"
        },
        {
          title: "The Real Restaurant Failure Rate Is Lower Than You Think (2025 Data)",
          link: "/blog/restaurant-failure-rate",
          image: "https://cdn.prod.website-files.com/666eec3edcc552b5eecc7fcd/669087fe87d3779675b302d8_668c491d72ee4a732b1cecb9_jason-leung-poI7DelFiVA-unsplash.jpeg",
          tag: "Industry Trends & Data",
          readTime: "16 min read",
          date: "May 15, 2025"
        }
      ]
    }
  ]
};