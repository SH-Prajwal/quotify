document.addEventListener("DOMContentLoaded", () => {
  const quote = document.getElementById("quote");
  const quoteAuthor = document.getElementById("author");
  const getQuote = document.getElementById("get-quote");

  let quotes = [
    {
      quote: "Greed is Evil! 💀",
      author: "- Anonymous",
    },
    {
      quote:
        "Success is not how high you have climbed, but how you make a positive difference to the world. 🌍",
      author: "- Roy T. Bennett",
    },
    {
      quote: "Don't be afraid to give up the good to go for the great. 🚀",
      author: "- John D. Rockefeller",
    },
    {
      quote:
        "The best time to plant a tree was 20 years ago. The second best time is now. 🌳",
      author: "- Chinese Proverb",
    },
    {
      quote: "Believe you can and you're halfway there. 💪",
      author: "- Theodore Roosevelt",
    },
    {
      quote:
        "The only limit to our realization of tomorrow is our doubts of today. ⏳",
      author: "- Franklin D. Roosevelt",
    },
    {
      quote:
        "Do not go where the path may lead, go instead where there is no path and leave a trail. ✨",
      author: "- Ralph Waldo Emerson",
    },
    {
      quote: "A journey of a thousand miles begins with a single step. 👣",
      author: "- Lao Tzu",
    },
    {
      quote: "Life is what happens when you're busy making other plans. 🌀",
      author: "- John Lennon",
    },
    {
      quote: "In the middle of difficulty lies opportunity. 🌟",
      author: "- Albert Einstein",
    },
    {
      quote:
        "Success usually comes to those who are too busy to be looking for it. 🏃‍♂️💨",
      author: "- Henry David Thoreau",
    },
    {
      quote:
        "We are what we repeatedly do. Excellence, then, is not an act, but a habit. 🏅",
      author: "- Aristotle",
    },
    {
      quote:
        "You can never cross the ocean until you have the courage to lose sight of the shore. 🌊",
      author: "- Christopher Columbus",
    },
    {
      quote:
        "The harder you work for something, the greater you'll feel when you achieve it. 🎯",
      author: "- Anonymous",
    },
    {
      quote: "The only way to do great work is to love what you do. ❤️",
      author: "- Steve Jobs",
    },
    {
      quote:
        "It's not whether you get knocked down, it's whether you get up. ⚡",
      author: "- Vince Lombardi",
    },
    {
      quote:
        "You don't have to be great to start, but you have to start to be great. 🚀",
      author: "- Zig Ziglar",
    },
    {
      quote: "The secret of getting ahead is getting started. 🌱",
      author: "- Mark Twain",
    },
    {
      quote: "Strive not to be a success, but rather to be of value. 💎",
      author: "- Albert Einstein",
    },
    {
      quote: "Doubt kills more dreams than failure ever will. 😔",
      author: "- Suzy Kassem",
    },
    {
      quote:
        "Your time is limited, so don't waste it living someone else's life. ⏳",
      author: "- Steve Jobs",
    },
  ];

  getQuote.addEventListener("click", async () => {
    const rand = Math.ceil(Math.random() * quotes.length);
    quote.textContent = quotes[rand].quote;
    quoteAuthor.textContent = quotes[rand].author;

    // await displayByAPI();
  });

  const displayByAPI = async () => {
    const data = await apiCall();
    const { author, content } = data.data;
    quote.textContent = content;
    quoteAuthor.textContent = `- ${author}`;
  };

  const apiCall = async () => {
    const url = "";
    const response = await fetch(url);
    if (!response.ok) {
      alert("Our Server May be Busy! Please try again later.");
    } else {
      return await response.json();
    }
  };
});
