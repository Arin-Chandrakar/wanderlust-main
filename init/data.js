// const sampleListings = [
//   {
//     title: "Cozy Beachfront Cottage",
//     description:
//       "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1500,
//     location: "Malibu",
//     country: "United States",
//   },
//   {
//     title: "Modern Loft in Downtown",
//     description:
//       "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1200,
//     location: "New York City",
//     country: "United States",
//   },
//   {
//     title: "Mountain Retreat",
//     description:
//       "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1000,
//     location: "Aspen",
//     country: "United States",
//   },
//   {
//     title: "Historic Villa in Tuscany",
//     description:
//       "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2500,
//     location: "Florence",
//     country: "Italy",
//   },
//   {
//     title: "Secluded Treehouse Getaway",
//     description:
//       "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 800,
//     location: "Portland",
//     country: "United States",
//   },
//   {
//     title: "Beachfront Paradise",
//     description:
//       "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2000,
//     location: "Cancun",
//     country: "Mexico",
//   },
//   {
//     title: "Rustic Cabin by the Lake",
//     description:
//       "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 900,
//     location: "Lake Tahoe",
//     country: "United States",
//   },
//   {
//     title: "Luxury Penthouse with City Views",
//     description:
//       "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 3500,
//     location: "Los Angeles",
//     country: "United States",
//   },
//   {
//     title: "Ski-In/Ski-Out Chalet",
//     description:
//       "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 3000,
//     location: "Verbier",
//     country: "Switzerland",
//   },
//   {
//     title: "Safari Lodge in the Serengeti",
//     description:
//       "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 4000,
//     location: "Serengeti National Park",
//     country: "Tanzania",
//   },
//   {
//     title: "Historic Canal House",
//     description:
//       "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1800,
//     location: "Amsterdam",
//     country: "Netherlands",
//   },
//   {
//     title: "Private Island Retreat",
//     description:
//       "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 10000,
//     location: "Fiji",
//     country: "Fiji",
//   },
//   {
//     title: "Charming Cottage in the Cotswolds",
//     description:
//       "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1200,
//     location: "Cotswolds",
//     country: "United Kingdom",
//   },
//   {
//     title: "Historic Brownstone in Boston",
//     description:
//       "Step back in time in this elegant historic brownstone located in the heart of Boston.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2200,
//     location: "Boston",
//     country: "United States",
//   },
//   {
//     title: "Beachfront Bungalow in Bali",
//     description:
//       "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1800,
//     location: "Bali",
//     country: "Indonesia",
//   },
//   {
//     title: "Mountain View Cabin in Banff",
//     description:
//       "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1500,
//     location: "Banff",
//     country: "Canada",
//   },
//   {
//     title: "Art Deco Apartment in Miami",
//     description:
//       "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
//     image: {
//       filename: "listingimage",
//       url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1600,
//     location: "Miami",
//     country: "United States",
//   },
//   {
//     title: "Tropical Villa in Phuket",
//     description:
//       "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 3000,
//     location: "Phuket",
//     country: "Thailand",
//   },
//   {
//     title: "Historic Castle in Scotland",
//     description:
//       "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 4000,
//     location: "Scottish Highlands",
//     country: "United Kingdom",
//   },
//   {
//     title: "Desert Oasis in Dubai",
//     description:
//       "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 5000,
//     location: "Dubai",
//     country: "United Arab Emirates",
//   },
//   {
//     title: "Rustic Log Cabin in Montana",
//     description:
//       "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1100,
//     location: "Montana",
//     country: "United States",
//   },
//   {
//     title: "Beachfront Villa in Greece",
//     description:
//       "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2500,
//     location: "Mykonos",
//     country: "Greece",
//   },
//   {
//     title: "Eco-Friendly Treehouse Retreat",
//     description:
//       "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 750,
//     location: "Costa Rica",
//     country: "Costa Rica",
//   },
//   {
//     title: "Historic Cottage in Charleston",
//     description:
//       "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1600,
//     location: "Charleston",
//     country: "United States",
//   },
//   {
//     title: "Modern Apartment in Tokyo",
//     description:
//       "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2000,
//     location: "Tokyo",
//     country: "Japan",
//   },
//   {
//     title: "Lakefront Cabin in New Hampshire",
//     description:
//       "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1200,
//     location: "New Hampshire",
//     country: "United States",
//   },
//   {
//     title: "Luxury Villa in the Maldives",
//     description:
//       "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 6000,
//     location: "Maldives",
//     country: "Maldives",
//   },
//   {
//     title: "Ski Chalet in Aspen",
//     description:
//       "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 4000,
//     location: "Aspen",
//     country: "United States",
//   },
//   {
//     title: "Secluded Beach House in Costa Rica",
//     description:
//       "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1800,
//     location: "Costa Rica",
//     country: "Costa Rica",
//   },
// ];

// module.exports = { data: sampleListings };


const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "beachfront_cottage",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    geometry: { type: "Point", coordinates: [-118.7806, 34.0259] },
  },
  {
    title: "Rustic Mountain Cabin",
    description: "Unplug and relax in this cozy mountain cabin surrounded by nature.",
    image: {
      url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      filename: "mountain_cabin",
    },
    price: 900,
    location: "Aspen",
    country: "United States",
    geometry: { type: "Point", coordinates: [-106.837, 39.1911] },
  },
  {
    title: "Modern City Penthouse",
    description: "Experience luxury in this penthouse offering skyline views and top-tier amenities.",
    image: {
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=60",
      filename: "city_penthouse",
    },
    price: 2200,
    location: "New York City",
    country: "United States",
    geometry: { type: "Point", coordinates: [-74.006, 40.7128] },
  },
  {
    title: "Tropical Island Villa",
    description: "Indulge in a private tropical escape with beachfront access and a private pool.",
    image: {
      url: "https://images.unsplash.com/photo-1597001378385-674275edb254?auto=format&fit=crop&w=800&q=60",
      filename: "island_villa",
    },
    price: 3500,
    location: "Bali",
    country: "Indonesia",
    geometry: { type: "Point", coordinates: [115.1889, -8.4095] },
  },
  {
    title: "Charming Countryside Farmhouse",
    description: "Escape the city hustle and relax in this charming farmhouse surrounded by green fields.",
    image: {
      url: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=800&q=60",
      filename: "farmhouse_countryside",
    },
    price: 600,
    location: "Tuscany",
    country: "Italy",
    geometry: { type: "Point", coordinates: [11.2558, 43.7696] },
  },
  {
    title: "Luxurious Ski Chalet",
    description: "Perfect for ski enthusiasts, this luxurious chalet offers direct access to slopes.",
    image: {
      url: "https://images.unsplash.com/photo-1518477021-6ca43d61f6f6?auto=format&fit=crop&w=800&q=60",
      filename: "ski_chalet",
    },
    price: 1800,
    location: "Zermatt",
    country: "Switzerland",
    geometry: { type: "Point", coordinates: [7.748, 46.0207] },
  },
  {
    title: "Secluded Desert Oasis",
    description: "An exclusive retreat in the heart of the desert. Peaceful and serene.",
    image: {
      url: "https://images.unsplash.com/photo-1534888014265-7b6b9b0a62c9?auto=format&fit=crop&w=800&q=60",
      filename: "desert_oasis",
    },
    price: 1200,
    location: "Dubai",
    country: "United Arab Emirates",
    geometry: { type: "Point", coordinates: [55.2962, 25.276987] },
  },
  {
    title: "Urban Loft in Tokyo",
    description: "A stylish loft in the heart of Tokyo, close to bustling markets and nightlife.",
    image: {
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
      filename: "tokyo_loft",
    },
    price: 1400,
    location: "Shibuya",
    country: "Japan",
    geometry: { type: "Point", coordinates: [139.6917, 35.6895] },
  },
  {
    title: "Lakeview Log Cabin",
    description: "Enjoy a peaceful retreat at this lakeside log cabin with scenic views.",
    image: {
      url: "https://images.unsplash.com/photo-1516442719524-a603408c90cb?auto=format&fit=crop&w=800&q=60",
      filename: "lakeview_cabin",
    },
    price: 1100,
    location: "Lake Tahoe",
    country: "United States",
    geometry: { type: "Point", coordinates: [-120.0324, 39.0968] },
  },
  {
    title: "Historic Parisian Apartment",
    description: "Stay in a charming historic apartment located in the heart of Paris.",
    image: {
      url: "https://images.unsplash.com/photo-1540573133985-88d05bfa3e44?auto=format&fit=crop&w=800&q=60",
      filename: "paris_apartment",
    },
    price: 1600,
    location: "Paris",
    country: "France",
    geometry: { type: "Point", coordinates: [2.3522, 48.8566] },
  },
  // 15 more listings below:
  {
    title: "Sunset Beach House",
    description: "An ocean-facing beach house with a spacious terrace for sunset views.",
    image: {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60",
      filename: "sunset_beach_house",
    },
    price: 1700,
    location: "Santa Monica",
    country: "United States",
    geometry: { type: "Point", coordinates: [-118.4912, 34.0195] },
  },
  {
    title: "Modern Condo in Sydney",
    description: "A modern, fully-furnished condo with harbor views and nearby attractions.",
    image: {
      url: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=800&q=60",
      filename: "sydney_condo",
    },
    price: 1300,
    location: "Sydney",
    country: "Australia",
    geometry: { type: "Point", coordinates: [151.2093, -33.8688] },
  },
  {
    title: "Treehouse in the Woods",
    description: "An enchanting treehouse surrounded by dense forest, perfect for adventurers.",
    image: {
      url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=60",
      filename: "treehouse_woods",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    geometry: { type: "Point", coordinates: [-122.6765, 45.5231] },
  }
];

module.exports = { data: sampleListings };