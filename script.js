const menuData = [
  {
    category: "entry-soups",
    title: "Entry Soup Bowl",
    subcategories: [
      {
        name: "Veg",
        items: [
        {
          name: "Tomato Soup",
          price: "110",
          type: "veg"
        },
        {
          name: "Manchow Soup",
          price: "130",
          type: "veg"
        },
        {
          name: "Sweet Corn Soup",
          price: "130",
          type: "veg"
        },
        {
          name: "Hot/Sour Soup",
          price: "130",
          type: "veg"
        },
        {
          name: "Clear Soup",
          price: "110",
          type: "veg"
        }
        ]
      },
      {
        name: "Non Veg",
        items: [
        {
          name: "Manchow Soup/Chicken",
          price: "160",
          type: "nonveg"
        },
        {
          name: "Egg/Chicken",
          price: "150",
          type: "nonveg"
        },
        {
          name: "Hot/Sour Soup/Chicken",
          price: "160",
          type: "nonveg"
        },
        {
          name: "Clear Soup/Chicken",
          price: "130",
          type: "nonveg"
        }
        ]
      }
    ]
  },
  {
    category: "starters",
    title: "Starters",
    subcategories: [
      {
        name: "Veg",
        items: [
        {
          name: "Paneer Pepper Dry",
          price: "269",
          type: "veg"
        },
        {
          name: "Paneer Chilli",
          price: "249",
          description: "Cubes of soft paneer sautÃ©ed with bell peppers, onions, and green chilies in a spicy Indo Chinese sauce. A fiery, tangy treat with just the right amount of crunch and softness.",
          type: "veg"
        },
        {
          name: "Paneer Manchurian",
          price: "249",
          description: "Crispy fried paneer tossed in a rich, savory Manchurian sauce with hints of garlic, ginger, and soy. Packed with bold flavors and a perfect blend of textures.",
          type: "veg"
        },
        {
          name: "Paneer 65",
          price: "249",
          description: "South Indian style spiced paneer cubes deep fried to crispy perfection. Flavored with curry leaves, chilies, and signature spicesâ€”spicy, aromatic, and addictive.",
          type: "veg"
        },
        {
          name: "Paneer Garlic",
          price: "249",
          description: "Garlic lovers rejoice! This dish features golden fried paneer tossed in a punchy garlic sauce with herbs and chilies. Intense, savory, and unforgettable.",
          type: "veg"
        },
        {
          name: "Gobhi Chilli",
          price: "190",
          description: "Crispy cauliflower florets tossed in a spicy Indo Chinese chilli sauce with onions and peppers. Fiery, tangy, and packed with crunch and flavor.",
          type: "veg"
        },
        {
          name: "Mushroom Chilli",
          price: "220",
          description: "Juicy mushrooms cooked in a spicy chilli garlic sauce with onions and capsicum. A delicious twist on the classic Chilly Paneer for mushroom lovers.",
          type: "veg"
        },
        {
          name: "Mushroom Manchurian",
          price: "220",
          description: "Crispy fried mushrooms coated in a rich, tangy Manchurian sauce. A perfect mix of crunch, spice, and umami flavors.",
          type: "veg"
        },
        {
          name: "Mushroom 65",
          price: "220",
          description: "Batter fried mushrooms tossed in fiery masala with curry leaves and chillies. Crispy, hot, and deeply flavorful.",
          type: "veg"
        },
        {
          name: "Paneer Pahadi Tikka",
          price: "280",
          description: "A Himalayan twist on the classic, this green marinated paneer is infused with mint, coriander, and spices. Fresh, herbal, and charred beautifully.",
          type: "veg"
        },
        {
          name: "Paneer Tikka",
          price: "250",
          description: "Chunks of paneer marinated in a spiced yogurt blend, grilled to perfection in the tandoor. Smoky, soft, and full of rich, bold flavors.",
          type: "veg"
        },
        {
          name: "Baby Corn Manchurian",
          price: "210",
          description: "Golden fried babycorn coated in tangy Manchurian sauce with garlic, ginger, and spring onions. A delicious twist on the classic.",
          type: "veg"
        },
        {
          name: "Baby Corn Pepper Dry",
          price: "210",
          description: "Babycorn stir fried with crushed black pepper, garlic, and herbs. Smoky and mildly spicy with a savory kick.",
          type: "veg"
        },
        {
          name: "Baby Corn 65",
          price: "210",
          description: "Spiced, deep fried babycorn coated in classic South Indian masala. Crispy, hot, and full of mouthwatering flavor.",
          type: "veg"
        },
        {
          name: "Baby Corn Chilli",
          price: "210",
          description: "Crispy babycorn tossed in spicy chili sauce with onions and bell peppers. A crunchy, flavorful Indo Chinese treat.",
          type: "veg"
        },
        {
          name: "Gobhi Manchurian",
          price: "190",
          type: "veg"
        },
        {
          name: "Gobhi Pepper Dry",
          price: "190",
          description: "Golden fried gobhi sautÃ©ed in a smoky black pepper sauce with garlic and capsicum. A peppery delight for spice lovers.",
          type: "veg"
        },
        {
          name: "Mushroom Tandoori Tikka",
          price: "230",
          description: "Juicy mushrooms coated in a tangy marinade, skewered and tandoor roasted till tender. Smoky and packed with earthy goodness.",
          type: "veg"
        },
        {
          name: "Mushroom Pepper Dry",
          price: "220",
          description: "A dry style starter with mushrooms sautÃ©ed in black pepper and herbs. Smoky, spicy, and irresistibly earthy with a gentle crunch in every bite.",
          type: "veg"
        },
        {
          name: "Gobhi 65",
          price: "190",
          description: "South Indian style deep fried gobhi with red chilli, curry leaves, and signature spices. Hot, crispy, and full of bold masala.",
          type: "veg"
        },
        {
          name: "Hara Bhara Kabab",
          price: "240",
          description: "A vegetarian delight made with spinach, peas, and potatoes, shaped into kababs and grilled. Healthy, flavorful, and satisfying.",
          type: "veg"
        },
        {
          name: "Mushroom Garlic",
          price: "220",
          description: "Juicy mushrooms tossed in a fragrant garlic sauce with herbs and mild spices. Aromatic, savory, and perfect for garlic lovers who enjoy bold yet balanced flavors.",
          type: "veg"
        },
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        ]
      },
      {
        name: "Non Veg",
        items: [
        
        
        ,
        
        {
          name: "Chicken Lollipop",
          price: "230",
          description: "Crispy, deep fried chicken wings shaped like lollipops and tossed in a spicy sauce. Crunchy, juicy, and perfect for finger food fans.",
          type: "nonveg"
        },
        {
          name: "Chicken Tikka",
          price: "240",
          description: "Boneless chicken chunks marinated in yogurt and spices, skewered and grilled in the tandoor. Tender, juicy, and bursting with flavor.",
          type: "nonveg"
        },
        {
          name: "Chicken Drumstick",
          price: "259",
          description: "Spiced and fried chicken legs with a crispy exterior and juicy meat. Finger licking good and a hit with all ages.",
          type: "nonveg"
        },
        {
          name: "Lemon Chicken",
          price: "249",
          description: "Tender chicken tossed in a tangy lemon glaze with herbs and spice. Fresh, zesty, and incredibly flavorful.",
          type: "nonveg"
        },
        {
          name: "Chicken Ghee Roast",
          price: "299",
          description: "A Mangalorean delicacy chicken slow roasted in ghee with fiery red masala. Rich, intense, and unforgettable.",
          type: "nonveg"
        },
        {
          name: "Chicken Achari Tikka",
          price: "250",
          description: "A tangy twist on tikka, this chicken is flavored with pickling spices for a punchy, spicy, and vibrant bite.",
          type: "nonveg"
        },
        {
          name: "Chicken Pepper Dry",
          price: "240",
          description: "Chicken sautÃ©ed with black pepper, curry leaves, and spices. Spicy, smoky, and full of rustic South Indian heat.",
          type: "nonveg"
        },
        {
          name: "Ginger Chicken",
          price: "240",
          description: "A warm, spiced chicken dish infused with fresh ginger and sautÃ©ed in a tangy sauce. Comforting, flavorful, and unique.",
          type: "nonveg"
        },
        {
          name: "Garlic Chicken",
          price: "240",
          description: "Juicy chicken chunks cooked in a rich garlic sauce with herbs and a hint of spice. Bold and aromatic with every bite.",
          type: "nonveg"
        },
        {
          name: "Chicken 65",
          price: "240",
          description: "South Indian style fried chicken with red chilies, curry leaves, and signature masala. Crisp, spicy, and incredibly flavorful.",
          type: "nonveg"
        },
        {
          name: "Chicken Manchurian",
          price: "240",
          description: "Deep fried chicken in a zesty Manchurian sauce with garlic, soy, and spring onions. Tangy, spicy, and saucy goodness.",
          type: "nonveg"
        },
        {
          name: "Chilli Chicken",
          price: "240",
          description: "Boneless chicken tossed in a spicy chilli sauce with onions and capsicum. Classic desi Chinese with bold, savory heat.",
          type: "nonveg"
        },
        {
          name: "Dragon Chicken",
          price: "250",
          description: "Crispy fried chicken tossed in a spicy, sweet, and tangy sauce with bell peppers and garlic. A fiery Indo Chinese delight.",
          type: "nonveg"
        },
        {
          name: "Chicken Kabab",
          price: "190",
          description: "Minced or chunked chicken marinated in Indian spices, grilled or pan seared to juicy perfection. A timeless favorite packed with flavor.",
          type: "nonveg"
        },
        {
          name: "Crispy Chicken",
          price: "260",
          description: "Crispy coated fried chicken tossed in light sauces with a satisfying crunch. Great texture and punchy flavors.",
          type: "nonveg"
        },
        {
          name: "Chicken Pahadi Kabab",
          price: "250",
          description: "Herb marinated chicken with mint, coriander, and green chilies. Earthy, fresh, and cooked over smoky heat for a mountain style kick.",
          type: "nonveg"
        },
        ,
        {
          name: "Fish Tawa Fry",
          price: "280",
          description: "Fresh fish fillets marinated and pan fried on a hot tawa with earthy spices. Crisp edges and soft center in every bite.",
          type: "nonveg"
        },
        {
          name: "Fish Tawa Masala Fry",
          price: "360",
          description: "A spicier take on the classic fry, featuring rich masala coating and sizzling flavor. Perfect with a squeeze of lemon.",
          type: "nonveg"
        },
        {
          name: "French Chicken",
          price: "260",
          type: "nonveg"
        },
        ,
        
        
        ,
        
        ,
        ,
        {
          name: "Fish Manchurian Chilli",
          price: "310",
          description: "Choose your style crispy Fish, saucy Manchurian, or bold Chilly Fish. Each one delivers rich flavor and crunch.",
          type: "nonveg"
        },
        ,
        ,
        ,
        
        {
          name: "Prawns Chilli",
          price: "350",
          description: "Crisp prawns tossed in a hot chili sauce with onions and capsicum. A spicy seafood favorite with an Indo Chinese punch.",
          type: "nonveg"
        },
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        {
          name: "Chicken Malai Kabab",
          price: "280",
          type: "nonveg"
        },
        
        
        
        {
          name: "Chicken Reshmi Kabab",
          price: "280",
          type: "nonveg"
        },
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        ]
      }
    ]
  },
  {
    category: "rice",
    title: "Rice & Biryani",
    subcategories: [
      {
        name: "Veg",
        items: [
        
        {
          name: "Palak Khichdi",
          price: "190",
          description: "A nutritious blend of rice, lentils, and spinach, gently spiced and slow cooked. Comforting and wholesome.",
          type: "veg"
        },
        {
          name: "Ghee Rice",
          price: "170",
          type: "veg"
        },
        {
          name: "Palak Rice",
          price: "170",
          description: "Spinach flavored rice sautÃ©ed with mild spices and herbs. Light, green, and flavorful.",
          type: "veg"
        },
        {
          name: "Special Curd Rice",
          price: "140",
          description: "Our upgraded curd rice with added garnishes like pomegranate, coriander, and fried chilies. Creamy and refreshing.",
          type: "veg"
        },
        {
          name: "Curd Rice",
          price: "100",
          description: "Cool, creamy curd rice tempered with mustard seeds and curry leaves. Light, tangy, and great for digestion.",
          type: "veg"
        },
        {
          name: "Dal Khichdi",
          price: "190",
          description: "Comfort Food At Its Best+Lentils And Rice Simmered Together With Indian Spices And Ghee. Mild, Nourishing, And Filling.",
          type: "veg"
        },
        {
          name: "Steamed Rice",
          price: "80",
          description: "Perfectly steamed white rice, soft and fluffy. A must have base for all your favorite gravies.",
          type: "veg"
        },
        {
          name: "Biryani Rice",
          price: "140",
          description: "Flavored rice cooked in biryani masalas, served plain without protein. Ideal with gravies or curd.",
          type: "veg"
        },
        {
          name: "Veg Biryani",
          price: "200",
          description: "Same as above basmati rice with fresh vegetables and spices. A delicious vegetarian treat.",
          type: "veg"
        }
        ]
      },
      {
        name: "Non Veg",
        items: [
        {
          name: "Chicken Hyderabadi Biryani",
          price: "220",
          description: "Aromatic basmati rice layered with marinated chicken, slow cooked in Hyderabadi dum style. Rich, spicy, and full of depth.",
          type: "nonveg"
        },
        {
          name: "Mutton Biryani",
          price: "350",
          description: "Tender mutton cooked with spiced basmati rice and saffron. Slow cooked for that authentic biryani richness.",
          type: "nonveg"
        },
        {
          name: "Prawns Biryani",
          price: "310",
          description: "Fresh prawns layered in spicy rice with coastal flavors and subtle saffron. A seafood lover's delight.",
          type: "nonveg"
        }
        ]
      }
    ]
  },
  {
    category: "chef-special",
    title: "Chef's Special",
    subcategories: [
      {
        name: "Non Veg",
        items: [
        {
          name: "Capsi Chicken",
          price: "320",
          description: "Tender chicken chunks cooked with capsicum, onions, and aromatic sauces. A flavorful fusion with a hint of smoky sweetness.",
          type: "nonveg"
        },
        {
          name: "Golden Chicken",
          price: "400",
          type: "nonveg"
        },
        {
          name: "Chatpata Chicken",
          price: "320",
          description: "A fiery and tangy chicken starter loaded with masalas, crunchy veggies, and bold Indian spices. Zesty, spicy, and full of street style flavor.",
          type: "nonveg"
        }
        ]
      }
    ]
  },
  {
    category: "noodles",
    title: "Fried Rice & Noodles",
    subcategories: [
      {
        name: "Veg",
        items: [
        {
          name: "Mushroom Fried Rice",
          price: "170",
          description: "Wok tossed rice with mushrooms, veggies, and light seasoning. Earthy, flavorful, and perfect for mushroom lovers.",
          type: "veg"
        },
        {
          name: "Schezwan Fried Rice",
          price: "170",
          description: "A spicy Indo Chinese rice dish tossed with vegetables and bold Schezwan sauce. Smoky, fiery, and full of umami punch.",
          type: "veg"
        },
        {
          name: "Veg Fried Rice",
          price: "160",
          description: "Classic Indo Chinese fried rice loaded with veggies, soy sauce, and a smoky wok flavor. Light, fluffy, and full of texture.",
          type: "veg"
        },
        {
          name: "Paneer Fried Rice",
          price: "190",
          description: "Soft paneer cubes tossed with rice and vegetables in a mildly spiced sauce. A hearty, protein rich fried rice option.",
          type: "veg"
        },
        {
          name: "Veg Hakka Noodles",
          price: "160",
          description: "Stir fried noodles with colorful vegetables in a light soy garlic sauce. Classic Indo Chinese comfort food.",
          type: "veg"
        },
        {
          name: "Veg Schezwan Noodles",
          price: "170",
          description: "Spicy noodles tossed in fiery Schezwan sauce with veggies and chilli garlic. Bold, tangy, and deliciously hot.",
          type: "veg"
        }
        ]
      },
      {
        name: "Non Veg",
        items: [
        {
          name: "Egg Fried Rice",
          price: "160",
          description: "Fluffy rice tossed with scrambled eggs and veggies in light soy. Simple, quick, and delicious.",
          type: "nonveg"
        },
        {
          name: "Chicken Fried Rice",
          price: "180",
          description: "Wok fried rice with juicy chicken pieces, eggs, and veggies. Savory, smoky, and satisfying.",
          type: "nonveg"
        },
        {
          name: "Chicken Schezwan Fried Rice",
          price: "190",
          description: "A spicy version of chicken fried rice tossed in fiery Schezwan sauce. Loaded with flavor and heat.",
          type: "nonveg"
        },
        {
          name: "Prawns Fried Rice",
          price: "250",
          description: "Plump prawns tossed with seasoned rice, garlic, and spring onions. Coastal flavors with a Chinese twist.",
          type: "nonveg"
        },
        {
          name: "Mixed Fried Rice",
          price: "280",
          description: "The best of all worlds meat, seafood, and eggs combined with fragrant fried rice. Rich, hearty, and loaded with proteins.",
          type: "nonveg"
        },
        {
          name: "Egg Noodles",
          price: "160",
          description: "Soft noodles stir fried with egg, onions, and light soy seasoning. Light, fast, and comforting.",
          type: "nonveg"
        },
        {
          name: "Chicken Hakka Noodles",
          price: "180",
          description: "Thin noodles tossed with chicken, veggies, and Asian sauces. Street style flavor with juicy bites of chicken.",
          type: "nonveg"
        },
        {
          name: "Chicken Schezwan Noodles",
          price: "180",
          description: "Spicy noodles with chicken and chilli garlic sauce. Perfect for heat seekers!",
          type: "nonveg"
        }
        ]
      }
    ]
  },
  {
    category: "main-course",
    title: "Main Course",
    subcategories: [
      {
        name: "Veg",
        items: [
        {
          name: "Dal Palak",
          price: "180",
          description: "A healthy combo of moong dal and fresh spinach, cooked with light spices. Wholesome, green, and nourishing.",
          type: "veg"
        },
        {
          name: "Dal Fry",
          price: "160",
          type: "veg"
        },
        {
          name: "Dal Tadka",
          price: "179",
          description: "Yellow lentils tempered with ghee, garlic, and spices. Light, flavorful, and soul satisfying.",
          type: "veg"
        },
        {
          name: "Paneer Butter Masala",
          price: "290",
          description: "A crowd favorite! Soft paneer cubes in a silky, buttery tomato gravy with a mild sweetness. Rich and luxurious.",
          type: "veg"
        },
        {
          name: "Paneer Tikka Masala",
          price: "280",
          description: "Tandoor grilled paneer tikka cubes simmered in a creamy, smoky tomato gravy. Bold, rich, and indulgent.",
          type: "veg"
        },
        {
          name: "Mushroom Masala Kadai",
          price: "230",
          description: "Juicy mushrooms in your choice of thick kadai style tomato masala or rich onion tomato gravy. Earthy, comforting, and satisfying.",
          type: "veg"
        },
        {
          name: "Mushroom Kolhapuri",
          price: "230",
          description: "Mushrooms cooked in a spicy Kolhapuri masala packed with coconut, red chillies, and local spices. Bold and rustic.",
          type: "veg"
        },
        {
          name: "Veg Hyderabadi",
          price: "220",
          description: "Veggies simmered in a creamy, nutty, and mildly spiced Hyderabadi style green masala. Fragrant, rich, and slightly sweet.",
          type: "veg"
        },
        {
          name: "Veg Kolhapuri",
          price: "220",
          description: "A fiery Maharashtrian style curry with mixed vegetables in a bold, red chilli coconut masala. Hot, spicy, and loaded with flavor.",
          type: "veg"
        },
        {
          name: "Mixed Veg Kadai",
          price: "230",
          description: "A colorful medley of seasonal vegetables cooked in a spiced tomato based kadai gravy. Rich, aromatic, and full of North Indian warmth.",
          type: "veg"
        },
        {
          name: "Palak Paneer",
          price: "260",
          description: "Fresh spinach purÃ©e cooked with tender paneer cubes, lightly spiced and finished with cream. Nutritious and comforting.",
          type: "veg"
        },
        {
          name: "Kaju Masala",
          price: "310",
          description: "Roasted cashews in a creamy, rich masala gravy. Mildly spiced and delightfully indulgent.",
          type: "veg"
        }
        ]
      },
      {
        name: "Non Veg",
        items: [
        {
          name: "Chicken Shahi Kurma",
          price: "299",
          description: "A Mughlai style creamy chicken curry made with dry fruits, cream, and aromatic spices. Rich, royal, and mildly sweet.",
          type: "nonveg"
        },
        {
          name: "Punjabi Chicken Masala",
          price: "260",
          description: "Chicken cooked in traditional Punjabi style onion tomato masala with rustic spices. Bold, thick, and full of heart.",
          type: "nonveg"
        },
        {
          name: "Lahori Chicken",
          price: "320",
          description: "A special Lahori preparation with chicken cooked in a silky, slow simmered, tomato rich gravy. Deep, flavorful, and fragrant.",
          type: "nonveg"
        },
        {
          name: "Chicken Kolhapuri",
          price: "240",
          description: "Bold and spicy chicken curry infused with roasted coconut and fiery red chilli Kolhapuri masala. Not for the faint hearted!",
          type: "nonveg"
        },
        {
          name: "Chicken Patiala",
          price: "280",
          description: "Boneless chicken stuffed with spiced egg or paneer, simmered in rich gravy. A royal Punjabi style delicacy with layers of flavor.",
          type: "nonveg"
        },
        {
          name: "Chicken Tikka Masala",
          price: "280",
          type: "nonveg"
        },
        {
          name: "Chicken Butter Masala",
          price: "280",
          description: "Tender chicken pieces in a creamy, buttery tomato based gravy. Smooth, mildly sweet and utterly indulgent.",
          type: "nonveg"
        },
        {
          name: "Chicken Hyderabadi",
          price: "260",
          description: "Chicken cooked in a green Hyderabadi style gravy with mint, coriander and cashew. Aromatic, creamy,and full of Nawabi flavor.",
          type: "nonveg"
        },
        {
          name: "Mutton Hyderabadi",
          price: "360",
          description: "Tender mutton pieces cooked in a creamy green masala with mint, coriander, and nuts. Regal and aromatic.",
          type: "nonveg"
        },
        {
          name: "Mutton Kadai Masala",
          price: "350",
          description: "Juicy mutton in your choice of kadai style masala or a thick, spiced gravy. Hearty and deeply flavorful.",
          type: "nonveg"
        },
        {
          name: "Fish In Hot Garlic Sauce",
          price: "320",
          description: "Fried fish fillets tossed in a bold garlic chili sauce. Spicy, aromatic and full of Indo Chinese flavor.",
          type: "nonveg"
        },
        {
          name: "Fish Curry",
          price: "330",
          description: "Local catch simmered in a tangy, spiced coconut or tomato based curry. Rich, flavorful, and home style comfort.",
          type: "nonveg"
        },
        {
          name: "Prawns Masala",
          price: "330",
          description: "Prawns cooked in a thick, spicy Indian masala with robust flavors and aromatic spices. Great with rice or naan.",
          type: "nonveg"
        },
        {
          name: "Mutton Hydrabadi",
          price: "360",
          type: "nonveg"
        },
        {
          name: "Mutton Kadai/Masala",
          price: "350",
          type: "nonveg"
        },
        {
          name: "Fish Curry",
          price: "330",
          type: "nonveg"
        }
        ]
      }
    ]
  },
  {
    category: "breads",
    title: "Breads",
    subcategories: [
      {
        name: "Veg",
        items: [
        
        {
          name: "Garlic Naan",
          price: "90",
          description: "Tandoor baked naan infused with fresh garlic and herbs. Aromatic, flavorful, and a perfect appetizer or accompaniment.",
          type: "veg"
        },
        {
          name: "Butter Kulcha",
          price: "60",
          description: "Buttery, golden kulcha with a melt in mouth texture. A rich twist to the classic Indian bread.",
          type: "veg"
        },
        {
          name: "Plain Kulcha",
          price: "50",
          description: "Leavened, oven baked bread with a slightly crispy crust and soft interior. Ideal for scooping up flavorful dishes.",
          type: "veg"
        },
        {
          name: "Butter Naan",
          price: "55",
          description: "Soft, fluffy naan brushed generously with creamy butter. Perfectly complements rich curries and gravies.",
          type: "veg"
        },
        {
          name: "Plain Naan",
          price: "50",
          description: "Soft, tandoor baked naan with a slightly chewy texture. Mildly smoky and perfect with gravies.",
          type: "veg"
        },
        {
          name: "Chapati",
          price: "30",
          description: "Light, soft, and oil free whole wheat flatbread. A perfect partner for any curry.",
          type: "veg"
        },
        {
          name: "Plain Tandoori Roti",
          price: "40",
          description: "Whole wheat tandoori rotis, soft inside with a crisp edge. Choose buttered or plain to suit your meal.",
          type: "veg"
        },
        {
          name: "Laccha Paratha",
          price: "70",
          description: "Multi layered flaky paratha with crispy edges and a soft center. Ideal for a hearty meal with any curry or pickle.",
          type: "veg"
        },
        {
          name: "Naan Plain",
          price: "50",
          type: "veg"
        },
        {
          name: "Naan Butter",
          price: "55",
          type: "veg"
        },
        {
          name: "Kulcha Plain",
          price: "50",
          type: "veg"
        },
        {
          name: "Kulcha Butter",
          price: "60",
          type: "veg"
        },
        {
          name: "Garlic Naan",
          price: "90",
          type: "veg"
        },
        
        {
          name: "Lachadar Parata",
          price: "70",
          type: "veg"
        }
        ]
      }
    ]
  },
  {
    category: "soups",
    title: "Soups & Salads",
    subcategories: [
      {
        name: "Veg",
        items: [
        {
          name: "Mixed Green Salad",
          price: "100",
          description: "A crisp and colorful mix of lettuce, cucumber, carrots, onions, and more, tossed with a light dressing. Fresh, crunchy, and perfect as a light bite or healthy side.",
          type: "veg"
        },
        {
          name: "Greek Salad",
          price: "280",
          description: "A Mediterranean classic with juicy tomatoes, cucumbers, olives, onions, and crumbly Feta Cheese, dressed in olive oil and herbs. It's vibrant, tangy, and refreshingly satisfying.",
          type: "veg"
        },
        {
          name: "Veg Manchow Soup",
          price: "130",
          description: "A bold, spicy Indo Chinese soup brimming with chopped veggies, garlic, soy sauce, and ginger. Topped with crispy fried noodles, it's the ultimate savory starter with layers of flavor and crunch.",
          type: "veg"
        },
        {
          name: "Veg Hot And Sour Soup",
          price: "130",
          description: "A lively mix of heat and tang, this thick soup is loaded with vegetables, soy sauce, chilli oil, and vinegar. It's bold, appetizing, and guaranteed to wake up your taste buds.",
          type: "veg"
        },
        {
          name: "Veg Clear Soup",
          price: "110",
          description: "Light, clean, and delicately flavored, our clear soup features finely chopped vegetables in a clear seasoned broth. Ideal for health conscious diners seeking simplicity and warmth.",
          type: "veg"
        },
        {
          name: "Veg Tomato Soup",
          price: "110",
          description: "A classic favorite made from slow simmered ripe tomatoes, lightly spiced and finished with cream for a smooth, velvety texture. Served hot and garnished with herbs comforting and timeless in every spoonful.",
          type: "veg"
        }
        ]
      },
      {
        name: "Non Veg",
        items: [
        {
          name: "Chicken Manchow Soup",
          price: "160",
          type: "nonveg"
        },
        {
          name: "Chicken Clear Soup",
          price: "130",
          description: "Simple, light, and nourishing this chicken broth is infused with herbs and packed with lean chicken Pieces Ideal for those who love clean, delicate flavors.",
          type: "nonveg"
        },
        {
          name: "Chicken Hot And Sour Soup",
          price: "160",
          description: "A spicy tangy combination of chicken, chilies, and vinegar in a thick, hearty broth. Bursting with flavor and heat, it's the ultimate pick me up for cold days or bold cravings.",
          type: "nonveg"
        },
        ]
      }
    ]
  },
  {
    category: "snacks",
    title: "Snacks",
    subcategories: [
      {
        name: "Veg",
        items: [
        {
          name: "Salted French Fries",
          price: "120",
          description: "Classic golden fries sprinkled with just the right amount of salt. Crisp outside, soft inside everyone's favorite snack.",
          type: "veg"
        },
        {
          name: "Peri Peri French Fries",
          price: "140",
          description: "Crispy fries tossed in bold peri peri seasoning. Spicy, zesty, and totally addictive.",
          type: "veg"
        }
        ]
      }
    ]
  },
  {
    category: "accompaniments",
    title: "Accompaniments",
    subcategories: [
      {
        name: "Veg",
        items: [
        {
          name: "Plain Curd",
          price: "30",
          description: "Simple, wholesome curd served chilled. Smooth, mildly tangy, and a natural digestive side.",
          type: "veg"
        },
        {
          name: "Roasted Papad",
          price: "50",
          description: "Thin lentil wafers roasted until crisp and aromatic. A healthy, crunchy bite to accompany any Indian meal.",
          type: "veg"
        },
        {
          name: "Masala Papad",
          price: "90",
          description: "A crispy fried or roasted papad topped with a zesty mix of onions, tomatoes, coriander, and spice masala. A crunchy, tangy snack to whet your appetite.",
          type: "veg"
        },
        {
          name: "Mixed Veg Raita",
          price: "40",
          description: "Creamy chilled yogurt blended with finely chopped vegetables and a touch of spice. Cooling, tangy, and the perfect balance for spicy dishes.",
          type: "veg"
        },
        {
          name: "Fried Papad",
          price: "50",
          description: "Golden brown, oil fried papad with a bubbly crunch and subtle spice. Pairs beautifully with chutneys or mains.",
          type: "veg"
        },
        {
          name: "Masala Papad",
          price: "90",
          type: "veg"
        },
        {
          name: "Fried Papad",
          price: "50",
          type: "veg"
        },
        {
          name: "Mixed Veg Raita",
          price: "40",
          type: "veg"
        }
        ]
      }
    ]
  },
  {
    category: "lovely-starters",
    title: "Lovely Starters",
    subcategories: [
      {
        name: "Accompaniments",
        items: [
        {
          name: "Masala Papad",
          price: "90",
          type: "veg"
        },
        {
          name: "Roast Papad",
          price: "50",
          type: "veg"
        },
        {
          name: "Fried Papad",
          price: "50",
          type: "veg"
        },
        {
          name: "Mixed Veg Raita",
          price: "40",
          type: "veg"
        },
        {
          name: "Curd Plain",
          price: "30",
          type: "veg"
        },
        {
          name: "Mayonnaise",
          price: "40",
          type: "veg"
        }
        ]
      }
    ]
  },
  {
    category: "mutton",
    title: "Mutton",
    subcategories: [
      {
        name: "Mutton",
        items: [
        {
          name: "Mutton Ghee Roast",
          price: "400",
          type: "nonveg"
        },
        {
          name: "Mutton Pepper Fry",
          price: "370",
          type: "nonveg"
        },
        {
          name: "Mutton Hydrabadi",
          price: "360",
          type: "nonveg"
        },
        {
          name: "Mutton Kadai/Masala",
          price: "350",
          type: "nonveg"
        },
        {
          name: "Mutton Chilly",
          price: "310",
          type: "nonveg"
        },
        {
          name: "Mutton Fry",
          price: "320",
          type: "nonveg"
        },
        {
          name: "Mutton Rogan Josh",
          price: "360",
          type: "nonveg"
        }
        ]
      }
    ]
  },
  {
    category: "tandoor-veg",
    title: "Tandoor Veg",
    subcategories: [
      {
        name: "Tandoor Veg",
        items: [
        {
          name: "Paneer Tikka",
          price: "250",
          type: "veg"
        },
        {
          name: "Paneer Pahadi Tikka",
          price: "280",
          type: "veg"
        },
        {
          name: "Mushroom Tandoori Tikka",
          price: "230",
          type: "veg"
        },
        {
          name: "Harabara Kabab",
          price: "240",
          type: "veg"
        }
        ]
      }
    ]
  },
  {
    category: "tandoor-nonveg",
    title: "Tandoor Non Veg",
    subcategories: [
      {
        name: "Tandoor Non Veg",
        items: [
        {
          name: "Tandoori Chicken Half",
          price: "240",
          type: "nonveg"
        },
        {
          name: "Tandoori Chicken Full",
          price: "450",
          type: "nonveg"
        },
        {
          name: "Chicken Tikka",
          price: "240",
          type: "nonveg"
        },
        {
          name: "Chicken Achari Tikka",
          price: "250",
          type: "nonveg"
        },
        {
          name: "Chicken Phadi Kabab",
          price: "250",
          type: "nonveg"
        },
        {
          name: "Kalmi Kabab -2",
          price: "170",
          type: "nonveg"
        },
        {
          name: "Chicken Malai Kabab",
          price: "280",
          type: "nonveg"
        },
        {
          name: "Chicken Sholey Kabab",
          price: "260",
          type: "nonveg"
        },
        {
          name: "Afghani Kabab Half",
          price: "280",
          type: "nonveg"
        },
        {
          name: "Afghani Kabab Full",
          price: "540",
          type: "nonveg"
        },
        {
          name: "Chicken Reshmi Kabab",
          price: "280",
          type: "nonveg"
        }
        ]
      }
    ]
  },
  {
    category: "egg",
    title: "Egg",
    subcategories: [
      {
        name: "Egg",
        items: [
        {
          name: "Egg Omelet",
          price: "60",
          type: "nonveg"
        },
        {
          name: "Egg Masala Omelet",
          price: "80",
          type: "nonveg"
        },
        {
          name: "Boiled Egg",
          price: "60",
          type: "nonveg"
        },
        {
          name: "Egg Chilly",
          price: "170",
          type: "nonveg"
        },
        {
          name: "Egg Manchurian",
          price: "170",
          type: "nonveg"
        },
        {
          name: "Egg 65",
          price: "190",
          type: "nonveg"
        },
        {
          name: "Egg Pepper Dry",
          price: "190",
          type: "nonveg"
        },
        {
          name: "Egg Masala",
          price: "170",
          type: "nonveg"
        },
        {
          name: "Egg Pepper Masala",
          price: "210",
          type: "nonveg"
        },
        {
          name: "Egg Burji",
          price: "90",
          type: "nonveg"
        }
        ]
      }
    ]
  },
  {
    category: "platters",
    title: "Platter",
    subcategories: [
      {
        name: "Veg Platter",
        items: [
        {
          name: "Tandoori Veg Platter",
          price: "300",
          type: "veg"
        },
        {
          name: "Tandoori Veg Platter With Rice and Dal",
          price: "440",
          type: "veg"
        }
        ]
      },
      {
        name: "Non Veg Platter",
        items: [
        {
          name: "Chicken Tandoor Platter Mini",
          price: "560",
          description: "Chicken Tandoor Half, Kalmi Kabab -2 Pcs, Chicken Tikka, Reshmi Kabab",
          type: "nonveg"
        },
        {
          name: "Chicken Tandoor Platter Jumbo",
          price: "1200",
          description: "Chicken Tandoor Full, Kalmi Kabab -4 Pcs, Chicken Tikka, Reshmi Kabab, Malai Tikka",
          type: "nonveg"
        }
        ]
      }
    ]
  },
  {
    category: "prawns",
    title: "Prawns (Seasonal)",
    subcategories: [
      {
        name: "Prawns",
        items: [
        {
          name: "Prawns Chilly",
          price: "350",
          type: "nonveg"
        },
        {
          name: "Prawns Manchurian",
          price: "350",
          type: "nonveg"
        },
        {
          name: "Prawns Pepper Dry",
          price: "350",
          type: "nonveg"
        },
                ]
      }
    ]
  },
  {
    category: "fish-prawns",
    title: "Fish & Prawns (Seasonal)",
    subcategories: [
      {
        name: "Fish & Prawns",
        items: [
        {
          name: "Fish Hariyali Tikka",
          price: "340",
          type: "nonveg"
        },
        {
          name: "Tandoori Prawns",
          price: "380",
          type: "nonveg"
        },
        {
          name: "Anjal Fry",
          price: "â€”",
          type: "nonveg"
        },
        {
          name: "Anjal Masala Fry",
          price: "â€”",
          type: "nonveg"
        },
        {
          name: "Anjal Tawa Fry",
          price: "â€”",
          type: "nonveg"
        }
        ]
      }
    ]
  },
  {
    category: "fish",
    title: "Fish (Seasonal)",
    subcategories: [
      {
        name: "Fish",
        items: [
        {
          name: "Fish Hot Garlic Sauce",
          price: "320",
          type: "nonveg"
        },
        {
          name: "Fish Schezwan",
          price: "310",
          type: "nonveg"
        },
        {
          name: "Fish 65/Manchurian/Chilly",
          price: "310",
          type: "nonveg"
        },
        {
          name: "Fish Tawa Fry",
          price: "280",
          type: "nonveg"
        },
        {
          name: "Fish Tawa Masala Fry",
          price: "360",
          type: "nonveg"
        },
        {
          name: "Fish Tikka",
          price: "360",
          type: "nonveg"
        }
        ]
      }
    ]
  },
  {
    category: "seafood",
    title: "Sea Food (Seasonal Only)",
    subcategories: [
      {
        name: "Sea Food",
        items: [
                {
          name: "Fish Curry",
          price: "330",
          type: "nonveg"
        }
        ]
      }
    ]
  },
  {
    category: "cool-drinks",
    title: "Cool Drinks",
    subcategories: [
      {
        name: "Drinks",
        items: [
        {
          name: "Fresh Lime Juice",
          price: "60",
          type: "veg"
        },
        {
          name: "Fresh Lime Soda",
          price: "80",
          type: "veg"
        },
        {
          name: "Water Bottle Half Ltr",
          price: "10",
          type: "veg"
        },
        {
          name: "Water Bottle 1 Ltr",
          price: "20",
          type: "veg"
        },
        {
          name: "Soda 250ml",
          price: "25",
          type: "veg"
        },
        {
          name: "Soda 750ml",
          price: "40",
          type: "veg"
        },
        {
          name: "Soft Drink 250ml",
          price: "25",
          type: "veg"
        },
        {
          name: "Soft Drink 750ml",
          price: "50",
          type: "veg"
        }
        ]
      }
    ]
  },
  {
    category: "indian-breads",
    title: "Indian Breads",
    subcategories: [
      {
        name: "Breads",
        items: [
        {
          name: "Tandoori Roti Plain-Wheat",
          price: "40",
          type: "veg"
        },
        {
          name: "Tandoori Butter Roti-Wheat",
          price: "50",
          type: "veg"
        },
        {
          name: "Chapati/Pulka",
          price: "30",
          type: "veg"
        },
        {
          name: "Naan Plain",
          price: "50",
          type: "veg"
        },
        {
          name: "Naan Butter",
          price: "55",
          type: "veg"
        },
        {
          name: "Wheat Parata",
          price: "â€”",
          type: "veg"
        },
        {
          name: "Kulcha Plain",
          price: "50",
          type: "veg"
        },
        {
          name: "Kulcha Butter",
          price: "60",
          type: "veg"
        },
        {
          name: "Garlic Naan",
          price: "90",
          type: "veg"
        },
        {
          name: "Methi Roti",
          price: "70",
          type: "veg"
        },
        {
          name: "Lachadar Parata",
          price: "70",
          type: "veg"
        }
        ]
      }
    ]
  }
];


/* =========================
   MENU RENDERING
========================= */

const menuContainer = document.getElementById("menu-container");
const searchInput = document.getElementById("searchInput");
const categoryButtons = document.querySelectorAll(".category-btn");

let currentCategory = "all";


function getAllItems(section) {

    if (section.subcategories) {

        return section.subcategories.flatMap(subcategory =>
            subcategory.items.map(item => ({
                ...item,
                subcategory: subcategory.name
            }))
        );

    }

    return section.items || [];
}



const sectionVisuals = {

    starters: {
        title: "STARTERS",
        subtitle: "Crispy â€¢ Spicy â€¢ Fresh",
        images: [
            "assets/section-images/starters/starter-1.jpg",
            "assets/section-images/starters/starter-2.jpg",
            "assets/section-images/starters/starter-3.jpg"
        ]
    },

    rice: {
        title: "RICE & BIRYANI",
        subtitle: "Aromatic â€¢ Rich â€¢ Comforting",
        images: [
            "assets/section-images/rice/rice-2.jpg",
            "assets/section-images/rice/rice-3.jpg",
            "assets/section-images/rice/rice-2.jpg"
        ]
    },

    "main-course": {
        title: "MAIN COURSE",
        subtitle: "Rich â€¢ Traditional â€¢ Satisfying",
        images: [
            "assets/section-images/main-course/main-1.jpg",
            "assets/section-images/main-course/main-2.jpg",
            "assets/section-images/main-course/main-3.jpg"
        ]
    },

    "tandoor-veg": {
        title: "TANDOOR",
        subtitle: "Charcoal Grilled Favourites",
        images: [
            "assets/section-images/tandoor/tandoor-1.jpg",
            "assets/section-images/tandoor/tandoor-2.jpg",
            "assets/section-images/tandoor/tandoor-3.jpg"
        ]
    },

    "tandoor-nonveg": {
        title: "TANDOOR NON-VEG",
        subtitle: "Smoky â€¢ Grilled â€¢ Juicy",
        images: [
            "assets/section-images/tandoor/tandoor-1.jpg",
            "assets/section-images/tandoor/tandoor-2.jpg",
            "assets/section-images/tandoor/tandoor-3.jpg"
        ]
    },

    seafood: {
        title: "SEAFOOD",
        subtitle: "Fresh â€¢ Coastal â€¢ Flavourful",
        images: [
            "assets/section-images/seafood/seafood-1.jpg",
            "assets/section-images/seafood/seafood-2.jpg",
            "assets/section-images/seafood/seafood-3.jpg"
        ]
    },

    breads: {
        title: "INDIAN BREADS",
        subtitle: "Freshly Baked â€¢ Soft â€¢ Golden",
        images: [
            "assets/section-images/breads/bread-1.jpg",
            "assets/section-images/breads/bread-2.jpg",
            "assets/section-images/breads/bread-3.jpg"
        ]
    },

    "cool-drinks": {
        title: "COOL DRINKS",
        subtitle: "Chilled â€¢ Refreshing â€¢ Perfect Pairings",
        images: [
            "assets/section-images/drinks/drink-1.jpg",
            "assets/section-images/drinks/drink-2.jpg",
            "assets/section-images/drinks/drink-3.jpg"
        ]
    }
};


const sectionFilterState = {};

function renderMenu() {

    const searchTerm = searchInput.value.toLowerCase().trim();

    document.body.classList.toggle(
        "search-active",
        searchTerm.length > 0
    );

    menuContainer.innerHTML = "";

    let totalResults = 0;

    menuData.forEach(section => {

        if (
            currentCategory !== "all" &&
            section.category !== currentCategory
        ) {
            return;
        }

        const sectionItems = getAllItems(section);

        const hasVeg = sectionItems.some(item => item.type === "veg");
        const hasNonVeg = sectionItems.some(item => item.type === "nonveg");
        const hasFoodFilter = hasVeg && hasNonVeg;

        if (!(section.category in sectionFilterState)) {
            sectionFilterState[section.category] = "all";
        }

        const selectedType = sectionFilterState[section.category];

        const filteredItems = sectionItems.filter(item => {

            const matchesSearch = `
                ${item.name}
                ${item.description || ""}
                ${item.type}
                ${item.subcategory || ""}
            `.toLowerCase().includes(searchTerm);

            const matchesType =
                !hasFoodFilter ||
                selectedType === "all" ||
                item.type === selectedType;

            return matchesSearch && matchesType;
        });

        if (filteredItems.length === 0) {
            return;
        }

        totalResults += filteredItems.length;

        const sectionElement = document.createElement("section");

        sectionElement.className = "menu-section";
        sectionElement.dataset.category = section.id;
        sectionElement.classList.toggle(
            "chef-special-section",
            section.id === "chef-special"
        );

        const visual = sectionVisuals[section.category];

        let content = "";

        if (visual) {
            content += `
                <div class="section-photo-banner">

                    <div class="section-photo">
                        <img
                            src="${visual.images[0]}"
                            alt="${visual.title}"
                            loading="lazy"
                        >

                        <div class="section-photo-overlay">
                            <strong>${visual.title}</strong>
                            <span>${visual.subtitle}</span>
                        </div>
                    </div>

                    <div class="section-photo">
                        <img
                            src="${visual.images[1]}"
                            alt="${visual.title}"
                            loading="lazy"
                        >
                    </div>

                    <div class="section-photo">
                        <img
                            src="${visual.images[2]}"
                            alt="${visual.title}"
                            loading="lazy"
                        >
                    </div>

                </div>
            `;
        }

        content += `
            <div class="menu-section-header">
                <h2>${section.category}</h2>
                <p>${section.description}</p>
            </div>
        `;

        if (hasFoodFilter) {
            content += `
                <div class="food-preference-filter">
                    <button
                        class="food-filter-btn ${selectedType === "all" ? "active" : ""}"
                        data-section="${section.category}"
                        data-type="all"
                    >
                        ALL
                    </button>

                    <button
                        class="food-filter-btn veg-filter ${selectedType === "veg" ? "active" : ""}"
                        data-section="${section.category}"
                        data-type="veg"
                    >
                        VEG
                    </button>

                    <button
                        class="food-filter-btn nonveg-filter ${selectedType === "nonveg" ? "active" : ""}"
                        data-section="${section.category}"
                        data-type="nonveg"
                    >
                        NON-VEG
                    </button>
                </div>
            `;
        }

        if (section.subcategories) {

            section.subcategories.forEach(subcategory => {

                const subItems = filteredItems.filter(
                    item => item.subcategory === subcategory.name
                );

                if (subItems.length === 0) {
                    return;
                }

                content += `
                    <div class="menu-subcategory">

                        <h3>${subcategory.name}</h3>

                        <div class="menu-items">
                            ${subItems.map(createFoodCard).join("")}
                        </div>

                    </div>
                `;
            });

        } else {

            content += `
                <div class="menu-items">
                    ${filteredItems.map(createFoodCard).join("")}
                </div>
            `;
        }

        sectionElement.innerHTML = content;

        menuContainer.appendChild(sectionElement);

    });

    if (totalResults === 0) {

        menuContainer.innerHTML = `
            <div class="no-results">

                <h3>No dishes found</h3>

                <p>
                    Try searching for another dish or
                    choose a different category.
                </p>

            </div>
        `;
    }

    document.querySelectorAll(".food-filter-btn").forEach(button => {

        button.addEventListener("click", () => {

            const section = button.dataset.section;
            const type = button.dataset.type;

            sectionFilterState[section] = type;

            renderMenu();

        });

    });
}

function createFoodCard(item) {

    return `
        <article class="menu-item">

            <div class="item-top">

                <div class="item-name">
                    ${item.name}
                </div>

                <div class="item-price">
                    ${item.price}
                </div>

            </div>

            ${
                item.description
                    ? `<p class="item-description">${item.description}</p>`
                    : ""
            }

            <div class="food-type">

                <span class="food-dot ${item.type}"></span>

                ${
                    item.type === "veg"
                        ? "Vegetarian"
                        : "Non-Vegetarian"
                }

            </div>

        </article>
    `;
}


/* =========================
   CATEGORY FILTER
========================= */

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        currentCategory = button.dataset.category;

        renderMenu();

    });

});


/* =========================
   SEARCH
========================= */

searchInput.addEventListener("input", renderMenu);


/* =========================
   INITIAL LOAD
========================= */

renderMenu();












