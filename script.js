const menuData = [

    /* =========================
       STARTERS
    ========================= */

    {
        category: "Starters",
        id: "starters",
        description: "Delicious starters to begin your meal",
        subcategories: [
            {
                name: "Veg Starters",
                items: [
                    { name: "Paneer Pepper Dry", price: "₹360", description: "", type: "veg" },
                    { name: "Paneer Chilli", price: "₹330", description: "Cubes of soft paneer sautéed with bell peppers, onions, and green chilies in a spicy Indo Chinese sauce. A fiery, tangy treat with just the right amount of crunch and softness.", type: "veg" },
                    { name: "Paneer Manchurian", price: "₹330", description: "Crispy fried paneer tossed in a rich, savory Manchurian sauce with hints of garlic, ginger, and soy. Packed with bold flavors and a perfect blend of textures.", type: "veg" },
                    { name: "Paneer 65", price: "₹330", description: "South Indian style spiced paneer cubes deep fried to crispy perfection. Flavored with curry leaves, chilies, and signature spices—spicy, aromatic, and addictive.", type: "veg" },
                    { name: "Paneer Garlic", price: "₹330", description: "Garlic lovers rejoice! This dish features golden fried paneer tossed in a punchy garlic sauce with herbs and chilies. Intense, savory, and unforgettable.", type: "veg" },
                    { name: "Gobhi Chilli", price: "₹260", description: "Crispy cauliflower florets tossed in a spicy Indo Chinese chilli sauce with onions and peppers. Fiery, tangy, and packed with crunch and flavor.", type: "veg" },
                    { name: "Mushroom Chilli", price: "₹300", description: "Juicy mushrooms cooked in a spicy chilli garlic sauce with onions and capsicum. A delicious twist on the classic Chilly Paneer for mushroom lovers.", type: "veg" },
                    { name: "Mushroom Manchurian", price: "₹300", description: "Crispy fried mushrooms coated in a rich, tangy Manchurian sauce. A perfect mix of crunch, spice, and umami flavors.", type: "veg" },
                    { name: "Mushroom 65", price: "₹300", description: "Batter fried mushrooms tossed in fiery masala with curry leaves and chillies. Crispy, hot, and deeply flavorful.", type: "veg" },
                    { name: "Paneer Pahadi Tikka", price: "₹380", description: "A Himalayan twist on the classic, this green marinated paneer is infused with mint, coriander, and spices. Fresh, herbal, and charred beautifully.", type: "veg" },
                    { name: "Paneer Tikka", price: "₹340", description: "Chunks of paneer marinated in a spiced yogurt blend, grilled to perfection in the tandoor. Smoky, soft, and full of rich, bold flavors.", type: "veg" },
                    { name: "Baby Corn Manchurian", price: "₹285", description: "Golden fried babycorn coated in tangy Manchurian sauce with garlic, ginger, and spring onions. A delicious twist on the classic.", type: "veg" },
                    { name: "Baby Corn Pepper Dry", price: "₹285", description: "Babycorn stir fried with crushed black pepper, garlic, and herbs. Smoky and mildly spicy with a savory kick.", type: "veg" },
                    { name: "Baby Corn 65", price: "₹285", description: "Spiced, deep fried babycorn coated in classic South Indian masala. Crispy, hot, and full of mouthwatering flavor.", type: "veg" },
                    { name: "Baby Corn Chilli", price: "₹285", description: "Crispy babycorn tossed in spicy chili sauce with onions and bell peppers. A crunchy, flavorful Indo Chinese treat.", type: "veg" },
                    { name: "Gobhi Manchurian", price: "₹260", description: "", type: "veg" },
                    { name: "Gobhi Pepper Dry", price: "₹260", description: "Golden fried gobhi sautéed in a smoky black pepper sauce with garlic and capsicum. A peppery delight for spice lovers.", type: "veg" },
                    { name: "Mushroom Tandoori Tikka", price: "₹310", description: "Juicy mushrooms coated in a tangy marinade, skewered and tandoor roasted till tender. Smoky and packed with earthy goodness.", type: "veg" },
                    { name: "Mushroom Pepper Dry", price: "₹300", description: "A dry style starter with mushrooms sautéed in black pepper and herbs. Smoky, spicy, and irresistibly earthy with a gentle crunch in every bite.", type: "veg" },
                    { name: "Gobhi 65", price: "₹260", description: "South Indian style deep fried gobhi with red chilli, curry leaves, and signature spices. Hot, crispy, and full of bold masala.", type: "veg" },
                    { name: "Hara Bhara Kabab", price: "₹340", description: "A vegetarian delight made with spinach, peas, and potatoes, shaped into kababs and grilled. Healthy, flavorful, and satisfying.", type: "veg" }
                ]
            },

            {
                name: "Non Veg Starters",
                items: [
                    { name: "Egg Pepper Dry", price: "₹260", description: "Egg cubes sautéed with black pepper, onions, and bold spices. A dry style starter with real depth and heat.", type: "nonveg" },
                    { name: "Egg Manchurian", price: "₹260", description: "Crispy egg bites coated in tangy Manchurian sauce with garlic and soy. Spicy, saucy, and satisfying.", type: "nonveg" },
                    { name: "Egg Chilli", price: "₹260", description: "Fried egg cubes tossed in spicy chilli sauce with onions and capsicum. A fiery Indo Chinese fusion favorite.", type: "nonveg" },
                    { name: "Egg 65", price: "₹260", description: "South Indian style egg cubes deep fried with curry leaves and chilli spice. Crispy and bold with real heat.", type: "nonveg" },
                    { name: "Chicken Lollipop", price: "₹310", description: "Crispy, deep fried chicken wings shaped like lollipops and tossed in a spicy sauce. Crunchy, juicy, and perfect for finger food fans.", type: "nonveg" },
                    { name: "Chicken Tikka", price: "₹325", description: "Boneless chicken chunks marinated in yogurt and spices, skewered and grilled in the tandoor. Tender, juicy, and bursting with flavor.", type: "nonveg" },
                    { name: "Tandoori Chicken", price: "₹325", description: "Classic whole chicken marinated overnight in tandoori spices and char grilled to smoky perfection. Juicy inside with that irresistible char outside.", type: "nonveg" },
                    { name: "Chicken Drumstick", price: "₹350", description: "Spiced and fried chicken legs with a crispy exterior and juicy meat. Finger licking good and a hit with all ages.", type: "nonveg" },
                    { name: "Lemon Chicken", price: "₹340", description: "Tender chicken tossed in a tangy lemon glaze with herbs and spice. Fresh, zesty, and incredibly flavorful.", type: "nonveg" },
                    { name: "Chicken Ghee Roast", price: "₹350", description: "A Mangalorean delicacy chicken slow roasted in ghee with fiery red masala. Rich, intense, and unforgettable.", type: "nonveg" },
                    { name: "Chicken Achari Tikka", price: "₹340", description: "A tangy twist on tikka, this chicken is flavored with pickling spices for a punchy, spicy, and vibrant bite.", type: "nonveg" },
                    { name: "Chicken Pepper Dry", price: "₹325", description: "Chicken sautéed with black pepper, curry leaves, and spices. Spicy, smoky, and full of rustic South Indian heat.", type: "nonveg" },
                    { name: "Ginger Chicken", price: "₹325", description: "A warm, spiced chicken dish infused with fresh ginger and sautéed in a tangy sauce. Comforting, flavorful, and unique.", type: "nonveg" },
                    { name: "Garlic Chicken", price: "₹325", description: "Juicy chicken chunks cooked in a rich garlic sauce with herbs and a hint of spice. Bold and aromatic with every bite.", type: "nonveg" },
                    { name: "Chicken 65", price: "₹325", description: "South Indian style fried chicken with red chilies, curry leaves, and signature masala. Crisp, spicy, and incredibly flavorful.", type: "nonveg" },
                    { name: "Chicken Manchurian", price: "₹325", description: "Deep fried chicken in a zesty Manchurian sauce with garlic, soy, and spring onions. Tangy, spicy, and saucy goodness.", type: "nonveg" },
                    { name: "Chilli Chicken", price: "₹325", description: "Boneless chicken tossed in a spicy chilli sauce with onions and capsicum. Classic desi Chinese with bold, savory heat.", type: "nonveg" },
                    { name: "Dragon Chicken", price: "₹340", description: "Crispy fried chicken tossed in a spicy, sweet, and tangy sauce with bell peppers and garlic. A fiery Indo Chinese delight.", type: "nonveg" },
                    { name: "Chicken Kabab", price: "₹260", description: "Minced or chunked chicken marinated in Indian spices, grilled or pan seared to juicy perfection. A timeless favorite packed with flavor.", type: "nonveg" },
                    { name: "Crispy Chicken", price: "₹350", description: "Crispy coated fried chicken tossed in light sauces with a satisfying crunch. Great texture and punchy flavors.", type: "nonveg" },
                    { name: "Chicken Pahadi Kabab", price: "₹340", description: "Herb marinated chicken with mint, coriander, and green chilies. Earthy, fresh, and cooked over smoky heat for a mountain style kick.", type: "nonveg" },
                    { name: "Chicken Reshmi Kabab", price: "₹380", description: "", type: "nonveg" },
                    { name: "Fish Tawa Fry", price: "₹380", description: "Fresh fish fillets marinated and pan fried on a hot tawa with earthy spices. Crisp edges and soft center in every bite.", type: "nonveg" },
                    { name: "Fish Tawa Masala Fry", price: "₹490", description: "A spicier take on the classic fry, featuring rich masala coating and sizzling flavor. Perfect with a squeeze of lemon.", type: "nonveg" },
                    { name: "French Chicken", price: "₹350", description: "", type: "nonveg" },
                    { name: "Chicken Malai Kabab", price: "₹380", description: "", type: "nonveg" },
                    { name: "Afghani Kabab", price: "₹380", description: "", type: "nonveg" },
                    { name: "Chicken Shole Kabab", price: "₹350", description: "", type: "nonveg" },
                    { name: "Mutton Ghee Roast", price: "₹480", description: "Mangalorean style dry roast with tender mutton cooked in ghee, red chilies, and spices. Fiery, rich, and aromatic.", type: "nonveg" },
                    { name: "Mutton Pepper Fry", price: "₹470", description: "Slow cooked mutton sautéed with cracked black pepper, onions, and curry leaves. Spicy, dry, and full of southern heat.", type: "nonveg" },
                    { name: "Mutton Chilli", price: "₹420", description: "A fiery Indo Chinese twist fried mutton chunks tossed in a spicy chilli sauce. Spicy, saucy, and addictive.", type: "nonveg" },
                    { name: "Mutton Fry", price: "₹430", description: "Marinated mutton slow fried with onions and bold Indian spices. Crisp edged and rustic with strong flavors.", type: "nonveg" },
                    { name: "Fish Hariyali Tikka", price: "₹460", description: "Boneless fish marinated in a green blend of mint, coriander, and yogurt, then grilled. Refreshing and smoky with herby goodness.", type: "nonveg" },
                    { name: "Fish Schezwan", price: "₹420", description: "Crispy fish in fiery schezwan sauce with vegetables and chilies. Spicy, tangy, and packed with zest.", type: "nonveg" },
                    { name: "Fish Manchurian Chilli", price: "₹420", description: "Choose your style crispy Fish, saucy Manchurian, or bold Chilly Fish. Each one delivers rich flavor and crunch.", type: "nonveg" },
                    { name: "Fish Tikka", price: "₹490", description: "Boneless fish marinated in tandoori spices and char grilled till golden. Smoky, juicy, and full of traditional flavor.", type: "nonveg" },
                    { name: "Tandoori Prawns", price: "₹470", description: "Jumbo prawns marinated in spicy tandoori masala and grilled to perfection. Smoky, spicy, and irresistibly juicy.", type: "nonveg" },
                    { name: "Prawns Pepper Dry", price: "₹475", description: "Succulent prawns tossed in black pepper and dry masalas. Bold and peppery with a coastal style kick.", type: "nonveg" },
                    { name: "Prawns Manchurian", price: "₹475", description: "", type: "nonveg" },
                    { name: "Prawns Chilli", price: "₹475", description: "Crisp prawns tossed in a hot chili sauce with onions and capsicum. A spicy seafood favorite with an Indo Chinese punch.", type: "nonveg" }
                ]
            }
        ]
    },


    /* =========================
       RICE & BIRYANI
    ========================= */

    {
        category: "Rice & Biryani",
        id: "rice",
        description: "Aromatic rice dishes and biryanis",
        subcategories: [
            {
                name: "Rice",
                items: [
                    { name: "Jeera Rice", price: "₹190", description: "Steamed basmati rice tempered with aromatic cumin seeds and ghee. Simple, fragrant, and a classic pairing with curries.", type: "veg" },
                    { name: "Palak Khichdi", price: "₹260", description: "A nutritious blend of rice, lentils, and spinach, gently spiced and slow cooked. Comforting and wholesome.", type: "veg" },
                    { name: "Ghee Rice", price: "₹230", description: "", type: "veg" },
                    { name: "Palak Rice", price: "₹230", description: "Spinach flavored rice sautéed with mild spices and herbs. Light, green, and flavorful.", type: "veg" },
                    { name: "Special Curd Rice", price: "₹190", description: "Our upgraded curd rice with added garnishes like pomegranate, coriander, and fried chilies. Creamy and refreshing.", type: "veg" },
                    { name: "Curd Rice", price: "₹135", description: "Cool, creamy curd rice tempered with mustard seeds and curry leaves. Light, tangy, and great for digestion.", type: "veg" },
                    { name: "Dal Khichdi", price: "₹260", description: "Comfort Food At Its Best+Lentils And Rice Simmered Together With Indian Spices And Ghee. Mild, Nourishing, And Filling.", type: "veg" },
                    { name: "Steamed Rice", price: "₹110", description: "Perfectly steamed white rice, soft and fluffy. A must have base for all your favorite gravies.", type: "veg" },
                    { name: "Biryani Rice", price: "₹190", description: "Flavored rice cooked in biryani masalas, served plain without protein. Ideal with gravies or curd.", type: "veg" }
                ]
            },

            {
                name: "Biryani",
                items: [
                    { name: "Chicken Hyderabadi Biryani", price: "₹295", description: "Aromatic basmati rice layered with marinated chicken, slow cooked in Hyderabadi dum style. Rich, spicy, and full of depth.", type: "nonveg" },
                    { name: "Mutton Biryani", price: "₹400", description: "Tender mutton cooked with spiced basmati rice and saffron. Slow cooked for that authentic biryani richness.", type: "nonveg" },
                    { name: "Prawns Biryani", price: "₹420", description: "Fresh prawns layered in spicy rice with coastal flavors and subtle saffron. A seafood lover's delight.", type: "nonveg" },
                    { name: "Veg Biryani", price: "₹220", description: "Same as above basmati rice with fresh vegetables and spices. A delicious vegetarian treat.", type: "veg" }
                ]
            }
        ]
    },


    /* =========================
       CHEF'S SPECIAL
    ========================= */

    {
        category: "Chef's Special",
        id: "chef-special",
        description: "Special selections from the chef",
        items: [
            { name: "Capsi Chicken", price: "₹430", description: "Tender chicken chunks cooked with capsicum, onions, and aromatic sauces. A flavorful fusion with a hint of smoky sweetness.", type: "nonveg" },
            { name: "Golden Chicken", price: "₹550", description: "", type: "nonveg" },
            { name: "Chatpata Chicken", price: "₹430", description: "A fiery and tangy chicken starter loaded with masalas, crunchy veggies, and bold Indian spices. Zesty, spicy, and full of street style flavor.", type: "nonveg" }
        ]
    },


    /* =========================
       FRIED RICE & NOODLES
    ========================= */

    {
        category: "Fried Rice & Noodles",
        id: "noodles",
        description: "Wok tossed Indo-Chinese favourites",
        subcategories: [
            {
                name: "Veg Fried Rice",
                items: [
                    { name: "Mushroom Fried Rice", price: "₹240", description: "Wok tossed rice with mushrooms, veggies, and light seasoning. Earthy, flavorful, and perfect for mushroom lovers.", type: "veg" },
                    { name: "Schezwan Fried Rice", price: "₹240", description: "A spicy Indo Chinese rice dish tossed with vegetables and bold Schezwan sauce. Smoky, fiery, and full of umami punch.", type: "veg" },
                    { name: "Veg Fried Rice", price: "₹220", description: "Classic Indo Chinese fried rice loaded with veggies, soy sauce, and a smoky wok flavor. Light, fluffy, and full of texture.", type: "veg" },
                    { name: "Paneer Fried Rice", price: "₹260", description: "Soft paneer cubes tossed with rice and vegetables in a mildly spiced sauce. A hearty, protein rich fried rice option.", type: "veg" }
                ]
            },

            {
                name: "Non Veg Fried Rice",
                items: [
                    { name: "Egg Fried Rice", price: "₹220", description: "Fluffy rice tossed with scrambled eggs and veggies in light soy. Simple, quick, and delicious.", type: "nonveg" },
                    { name: "Chicken Fried Rice", price: "₹240", description: "Wok fried rice with juicy chicken pieces, eggs, and veggies. Savory, smoky, and satisfying.", type: "nonveg" },
                    { name: "Chicken Schezwan Fried Rice", price: "₹260", description: "A spicy version of chicken fried rice tossed in fiery Schezwan sauce. Loaded with flavor and heat.", type: "nonveg" },
                    { name: "Prawns Fried Rice", price: "₹340", description: "Plump prawns tossed with seasoned rice, garlic, and spring onions. Coastal flavors with a Chinese twist.", type: "nonveg" },
                    { name: "Mixed Fried Rice", price: "₹380", description: "The best of all worlds meat, seafood, and eggs combined with fragrant fried rice. Rich, hearty, and loaded with proteins.", type: "nonveg" }
                ]
            },

            {
                name: "Noodles",
                items: [
                    { name: "Veg Hakka Noodles", price: "₹220", description: "Stir fried noodles with colorful vegetables in a light soy garlic sauce. Classic Indo Chinese comfort food.", type: "veg" },
                    { name: "Veg Schezwan Noodles", price: "₹260", description: "Spicy noodles tossed in fiery Schezwan sauce with veggies and chilli garlic. Bold, tangy, and deliciously hot.", type: "veg" },
                    { name: "Egg Noodles", price: "₹220", description: "Soft noodles stir fried with egg, onions, and light soy seasoning. Light, fast, and comforting.", type: "nonveg" },
                    { name: "Chicken Hakka Noodles", price: "₹240", description: "Thin noodles tossed with chicken, veggies, and Asian sauces. Street style flavor with juicy bites of chicken.", type: "nonveg" },
                    { name: "Chicken Schezwan Noodles", price: "₹200", description: "Spicy noodles with chicken and chilli garlic sauce. Perfect for heat seekers!", type: "nonveg" }
                ]
            }
        ]
    },


    /* =========================
       MAIN COURSE
    ========================= */

    {
        category: "Main Course",
        id: "main-course",
        description: "Rich curries and delicious main-course favourites",
        subcategories: [
            {
                name: "Veg Main Course",
                items: [
                    { name: "Dal Palak", price: "₹230", description: "A healthy combo of moong dal and fresh spinach, cooked with light spices. Wholesome, green, and nourishing.", type: "veg" },
                    { name: "Dal Fry", price: "₹220", description: "", type: "veg" },
                    { name: "Dal Tadka", price: "₹245", description: "Yellow lentils tempered with ghee, garlic, and spices. Light, flavorful, and soul satisfying.", type: "veg" },
                    { name: "Paneer Butter Masala", price: "₹390", description: "A crowd favorite! Soft paneer cubes in a silky, buttery tomato gravy with a mild sweetness. Rich and luxurious.", type: "veg" },
                    { name: "Paneer Tikka Masala", price: "₹380", description: "Tandoor grilled paneer tikka cubes simmered in a creamy, smoky tomato gravy. Bold, rich, and indulgent.", type: "veg" },
                    { name: "Mushroom Masala Kadai", price: "₹310", description: "Juicy mushrooms in your choice of thick kadai style tomato masala or rich onion tomato gravy. Earthy, comforting, and satisfying.", type: "veg" },
                    { name: "Mushroom Kolhapuri", price: "₹310", description: "Mushrooms cooked in a spicy Kolhapuri masala packed with coconut, red chillies, and local spices. Bold and rustic.", type: "veg" },
                    { name: "Veg Hyderabadi", price: "₹295", description: "Veggies simmered in a creamy, nutty, and mildly spiced Hyderabadi style green masala. Fragrant, rich, and slightly sweet.", type: "veg" },
                    { name: "Veg Kolhapuri", price: "₹295", description: "A fiery Maharashtrian style curry with mixed vegetables in a bold, red chilli coconut masala. Hot, spicy, and loaded with flavor.", type: "veg" },
                    { name: "Mixed Veg Kadai", price: "₹310", description: "A colorful medley of seasonal vegetables cooked in a spiced tomato based kadai gravy. Rich, aromatic, and full of North Indian warmth.", type: "veg" },
                    { name: "Palak Paneer", price: "₹350", description: "Fresh spinach purée cooked with tender paneer cubes, lightly spiced and finished with cream. Nutritious and comforting.", type: "veg" },
                    { name: "Mushroom Garlic", price: "₹300", description: "Juicy mushrooms tossed in a fragrant garlic sauce with herbs and mild spices. Aromatic, savory, and perfect for garlic lovers who enjoy bold yet balanced flavors.", type: "veg" },
                    { name: "Kaju Masala", price: "₹420", description: "Roasted cashews in a creamy, rich masala gravy. Mildly spiced and delightfully indulgent.", type: "veg" }
                ]
            },

            {
                name: "Non Veg Main Course",
                items: [
                    { name: "Chicken Shahi Kurma", price: "₹400", description: "A Mughlai style creamy chicken curry made with dry fruits, cream, and aromatic spices. Rich, royal, and mildly sweet.", type: "nonveg" },
                    { name: "Punjabi Chicken Masala", price: "₹350", description: "Chicken cooked in traditional Punjabi style onion tomato masala with rustic spices. Bold, thick, and full of heart.", type: "nonveg" },
                    { name: "Lahori Chicken", price: "₹430", description: "A special Lahori preparation with chicken cooked in a silky, slow simmered, tomato rich gravy. Deep, flavorful, and fragrant.", type: "nonveg" },
                    { name: "Chicken Kolhapuri", price: "₹325", description: "Bold and spicy chicken curry infused with roasted coconut and fiery red chilli Kolhapuri masala. Not for the faint hearted!", type: "nonveg" },
                    { name: "Chicken Patiala", price: "₹390", description: "Boneless chicken stuffed with spiced egg or paneer, simmered in rich gravy. A royal Punjabi style delicacy with layers of flavor.", type: "nonveg" },
                    { name: "Chicken Tikka Masala", price: "₹380", description: "", type: "nonveg" },
                    { name: "Chicken Masala Kadai", price: "₹310", description: "Tender chicken simmered in your choice of rich masala gravy or spicy kadai style tomato onion sauce. Robust and satisfying.", type: "nonveg" },
                    { name: "Chicken Butter Masala", price: "₹380", description: "Tender chicken pieces in a creamy, buttery tomato based gravy. Smooth, mildly sweet and utterly indulgent.", type: "nonveg" },
                    { name: "Chicken Hyderabadi", price: "₹350", description: "Chicken cooked in a green Hyderabadi style gravy with mint, coriander and cashew. Aromatic, creamy,and full of Nawabi flavor.", type: "nonveg" },
                    { name: "Mutton Hyderabadi", price: "₹490", description: "Tender mutton pieces cooked in a creamy green masala with mint, coriander, and nuts. Regal and aromatic.", type: "nonveg" },
                    { name: "Mutton Kadai Masala", price: "₹470", description: "Juicy mutton in your choice of kadai style masala or a thick, spiced gravy. Hearty and deeply flavorful.", type: "nonveg" },
                    { name: "Fish In Hot Garlic Sauce", price: "₹430", description: "Fried fish fillets tossed in a bold garlic chili sauce. Spicy, aromatic and full of Indo Chinese flavor.", type: "nonveg" },
                    { name: "Fish Curry", price: "₹450", description: "Local catch simmered in a tangy, spiced coconut or tomato based curry. Rich, flavorful, and home style comfort.", type: "nonveg" },
                    { name: "Prawns Masala", price: "₹450", description: "Prawns cooked in a thick, spicy Indian masala with robust flavors and aromatic spices. Great with rice or naan.", type: "nonveg" }
                ]
            }
        ]
    },


    /* =========================
       BREADS
    ========================= */

    {
        category: "Breads",
        id: "breads",
        description: "Freshly prepared Indian breads",
        items: [
            { name: "Methi Roti", price: "₹80", description: "Whole wheat roti mixed with fresh fenugreek leaves [methi]. Nutty, mildly bitter, and packed with health benefits.", type: "veg" },
            { name: "Garlic Naan", price: "₹125", description: "Tandoor baked naan infused with fresh garlic and herbs. Aromatic, flavorful, and a perfect appetizer or accompaniment.", type: "veg" },
            { name: "Butter Kulcha", price: "₹80", description: "Buttery, golden kulcha with a melt in mouth texture. A rich twist to the classic Indian bread.", type: "veg" },
            { name: "Plain Kulcha", price: "₹70", description: "Leavened, oven baked bread with a slightly crispy crust and soft interior. Ideal for scooping up flavorful dishes.", type: "veg" },
            { name: "Butter Naan", price: "₹80", description: "Soft, fluffy naan brushed generously with creamy butter. Perfectly complements rich curries and gravies.", type: "veg" },
            { name: "Plain Naan", price: "₹70", description: "Soft, tandoor baked naan with a slightly chewy texture. Mildly smoky and perfect with gravies.", type: "veg" },
            { name: "Chapati", price: "₹40", description: "Light, soft, and oil free whole wheat flatbread. A perfect partner for any curry.", type: "veg" },
            { name: "Plain Tandoori Roti", price: "₹50", description: "Whole wheat tandoori rotis, soft inside with a crisp edge. Choose buttered or plain to suit your meal.", type: "veg" },
            { name: "Laccha Paratha", price: "₹90", description: "Multi layered flaky paratha with crispy edges and a soft center. Ideal for a hearty meal with any curry or pickle.", type: "veg" }
        ]
    },


    /* =========================
       SOUPS & SALADS
    ========================= */

    {
        category: "Soups & Salads",
        id: "soups",
        description: "Light soups and refreshing salads",
        subcategories: [
            {
                name: "Non Veg Soups",
                items: [
                    { name: "Chicken Manchow Soup", price: "₹215", description: "", type: "nonveg" },
                    { name: "Chicken Clear Soup", price: "₹175", description: "Simple, light, and nourishing this chicken broth is infused with herbs and packed with lean chicken Pieces Ideal for those who love clean, delicate flavors.", type: "nonveg" },
                    { name: "Chicken Hot And Sour Soup", price: "₹215", description: "A spicy tangy combination of chicken, chilies, and vinegar in a thick, hearty broth. Bursting with flavor and heat, it's the ultimate pick me up for cold days or bold cravings.", type: "nonveg" },
                    { name: "Egg Sweet Corn Soup", price: "₹200", description: "", type: "nonveg" },
                    { name: "Chicken Sweet Corn Soup", price: "₹200", description: "", type: "nonveg" }
                ]
            },

            {
                name: "Salads",
                items: [
                    { name: "Mixed Green Salad", price: "₹150", description: "A crisp and colorful mix of lettuce, cucumber, carrots, onions, and more, tossed with a light dressing. Fresh, crunchy, and perfect as a light bite or healthy side.", type: "veg" },
                    { name: "Greek Salad", price: "₹180", description: "A Mediterranean classic with juicy tomatoes, cucumbers, olives, onions, and crumbly Feta Cheese, dressed in olive oil and herbs. It's vibrant, tangy, and refreshingly satisfying.", type: "veg" }
                ]
            },

            {
                name: "Veg Soups",
                items: [
                    { name: "Veg Manchow Soup", price: "₹180", description: "A bold, spicy Indo Chinese soup brimming with chopped veggies, garlic, soy sauce, and ginger. Topped with crispy fried noodles, it's the ultimate savory starter with layers of flavor and crunch.", type: "veg" },
                    { name: "Veg Hot And Sour Soup", price: "₹180", description: "A lively mix of heat and tang, this thick soup is loaded with vegetables, soy sauce, chilli oil, and vinegar. It's bold, appetizing, and guaranteed to wake up your taste buds.", type: "veg" },
                    { name: "Veg Clear Soup", price: "₹135", description: "Light, clean, and delicately flavored, our clear soup features finely chopped vegetables in a clear seasoned broth. Ideal for health conscious diners seeking simplicity and warmth.", type: "veg" },
                    { name: "Veg Tomato Soup", price: "₹180", description: "A classic favorite made from slow simmered ripe tomatoes, lightly spiced and finished with cream for a smooth, velvety texture. Served hot and garnished with herbs comforting and timeless in every spoonful.", type: "veg" }
                ]
            }
        ]
    },


    /* =========================
       SNACKS
    ========================= */

    {
        category: "Snacks",
        id: "snacks",
        description: "Perfect bites for any time",
        items: [
            { name: "Salted French Fries", price: "₹160", description: "Classic golden fries sprinkled with just the right amount of salt. Crisp outside, soft inside everyone's favorite snack.", type: "veg" },
            { name: "Peri Peri French Fries", price: "₹190", description: "Crispy fries tossed in bold peri peri seasoning. Spicy, zesty, and totally addictive.", type: "veg" }
        ]
    },


    /* =========================
       ACCOMPANIMENTS
    ========================= */

    {
        category: "Accompaniments",
        id: "accompaniments",
        description: "Perfect sides to complete your meal",
        items: [
            { name: "Plain Curd", price: "₹45", description: "Simple, wholesome curd served chilled. Smooth, mildly tangy, and a natural digestive side.", type: "veg" },
            { name: "Roasted Papad", price: "₹70", description: "Thin lentil wafers roasted until crisp and aromatic. A healthy, crunchy bite to accompany any Indian meal.", type: "veg" },
            { name: "Masala Papad", price: "₹125", description: "A crispy fried or roasted papad topped with a zesty mix of onions, tomatoes, coriander, and spice masala. A crunchy, tangy snack to whet your appetite.", type: "veg" },
            { name: "Mixed Veg Raita", price: "₹55", description: "Creamy chilled yogurt blended with finely chopped vegetables and a touch of spice. Cooling, tangy, and the perfect balance for spicy dishes.", type: "veg" },
            { name: "Fried Papad", price: "₹70", description: "Golden brown, oil fried papad with a bubbly crunch and subtle spice. Pairs beautifully with chutneys or mains.", type: "veg" }
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


function renderMenu() {

    const searchTerm = searchInput.value.toLowerCase().trim();

    menuContainer.innerHTML = "";

    let totalResults = 0;


    menuData.forEach(section => {

        if (
            currentCategory !== "all" &&
            section.id !== currentCategory
        ) {
            return;
        }


        const sectionItems = getAllItems(section);


        const filteredItems = sectionItems.filter(item => {

            const searchableText = `
                ${item.name}
                ${item.description}
                ${item.type}
                ${item.subcategory || ""}
            `.toLowerCase();

            return searchableText.includes(searchTerm);
        });


        if (filteredItems.length === 0) {
            return;
        }


        totalResults += filteredItems.length;


        const sectionElement = document.createElement("section");

        sectionElement.className = "menu-section";
        sectionElement.dataset.category = section.id;
        sectionElement.classList.toggle("chef-special-section", section.id === "chef-special");


        let content = `
            <div class="menu-section-header">
                <h2>${section.category}</h2>
                <p>${section.description}</p>
            </div>
        `;


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




