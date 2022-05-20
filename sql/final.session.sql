
CREATE TABLE CustomerStories(
    id INT PRIMARY KEY AUTO_INCREMENT,
    cust_name VARCHAR (255) NOT NULL UNIQUE,
    cust_loc VARCHAR (255),
    cust_img VARCHAR (255),
    cust_test TEXT
);

CREATE TABLE ComingSoon(
    id INT PRIMARY KEY AUTO_INCREMENT,
    inv_number INT NOT NULL UNIQUE,
    cs_name VARCHAR (255),
    cs_img VARCHAR (255),
    cs_price VARCHAR (255),
    cs_desc TEXT
);

CREATE TABLE InStock(
    id INT PRIMARY KEY AUTO_INCREMENT,
    inv_number INT NOT NULL UNIQUE,
    is_name VARCHAR (255),
    is_img VARCHAR (255),
    is_price VARCHAR (255),
    is_desc TEXT
);

INSERT INTO CustomerStories (cust_name, cust_loc, cust_img, cust_test)
VALUES
    ("Banjo Master", "Nashville TN", "/media/custimgs/BANJO.png", "I bought a few products from here, including my BANJO. As a master BANJOer, this was the best purchas I've ever made. I'd buy more BANJOs in a heart beat. In fact I have, I own 67 BANJOs."),
    ("Blade", "New York NY", "/media/custimgs/blade.png", "I'm Blade"),
    ("Colin", "Toronto CA", "/,edia/custimgs/conlin.jpg", "I boguht a thing and it made me bald. 10 stars!"),
    ("Tyler", "Los Angeles CA", "/media/custimgs/knightyler.jpg", "I spent $500 at 5am, that's lucky or something right?"),
    ("Matsumoto", "Tokyo JP", "/media/custimgs/matsuclose.png", "Thanks for the cool wig, I hate it."),
    ("Man", "Normal Place USA", "/media/custimgs/nosir.jpg", "No you can't use my photo"),
    ("Wayne", "Orlando FL", "/media/custimgs/wayne.jpg", "This is a good place to get prizes for your show. Not that I would know"), 
    ("Your Boy", "Unknown", "/media/custimgs/whatspopping.png", "Yoooo (this review hit character limit)"),
    ("Dog", "Dog Place", "/media/custimgs/yon.png", "I am a dog. Buy things."), 
    ("David", "In a Beautiful House", "/media/custimgs/youmayfindyourself.png", "MY GOD, HOW DID I GET HERE?")
    

INSERT INTO ComingSoon (inv_number, cs_name, cs_img, cs_price, cs_desc)
VALUES
    (0458, "RC Austin Powers Car", "/media/comingsoon/austinpworess.png", "$12.50", "A small and very scary looking toy rc car with Austin Powers on it. Please take it away."),
    (9845, "Cat Hat + Shorts", "/media/comingsoon/bigman.jpg", "$4.00", "You want your cat to look fly as hell? Get these and let them be the cowboy they are."),
    (1113, "Gator Shades Print", "/media/comingsoon/comfygator.jpg", "$300.56", "This gator is really just chilling. Like check him out. This would look dope on your wall."),
    (5621, "Recording SetUp (Real)", "/media/comingsoon/coolsetup.png", "$2000.00", "Mics, mixers, headphones, studio, the whole shebang. Dog not included."),
    (2211, "Kiwi That Spins", "/media/comingsoon/kiwiwk.gif", "$52.23", "Not sure how this got added but hey I'll sell anything."),
    (0015, "Sheep", "/media/comingsoon/sheepithink.jpg", "$70.50", "This is a sheep probably. I think so anyways. It doesn't baa but maybe it's confused. Likes playing fetch"),
    (9261, "The Coolest Art Piece Ever", "/media/comingsoon/swoleton.png", "$0", "This is not for sale. This cannot be let into mortal hands. It is too powerful a piece to be set free into the world. Grandmothers love it!"),
    (0000, "Thing Outside", "/media//comingsoon/thinginmytree.png", "$0", "This thing sits in my tree all day and steals my drinks. Please come take it it's free"),
    (8329, "Stock Image of Buddha", "/media/comingsoon/woh.png", "$10.50", ""),
    (7723, "Concerned Dog", "/media/comingsoon/worry.png", "$20.00", "This dog is worried. Yep");

INSERT INTO InStock (inv_number, is_name, is_img, is_price, is_desc)
VALUES 
    (5567, "Beans Mailed to Your Door", "/media/instock/beans.jpg", "$5.00", "We will mail beans to you! They come fresh from the can and are shipped to you in a high quality paper evnelope. Not liable for spillage."),
    (6777, "Cool Glasses", "/media/instock/becool.png", "$10.00", "Novelty glasses in the shape of the word 'COOL'. Probably not practical, but neat."),
    (8235, "Incredible Fella", "/media/instock/bigguy.jpg", "$19.99", "Only the most legit and high quality figures on our site. From the hit Marble series it's everyone's favorite green dude! Great for kids that don't know better."),
    (1239, "Boy Watcher Mug", "/media/instock/boywatch.png", "$8.50", "Ever wanted to watch your boy from inside a mug? This is perfect for you."),
    (3997, "Cat Gun Kit (Make your own)", "/media/instock/catgun.jpg", "$3.80", "Build your very own non-functional cat blaster 2000. Comes with everything you need to make your favorite shooter from your favorite shooter based thing. Cat not included."),
    (5555, "Lord Foog Print", "/media/instock/coolhorse.jpg", "$10.00", "A fine print of the most royal and nobel Lord Foog the 2st. Hang him above your fireplace to look very fancy."),
    (2234, "Fine Lobster Meal", "/media/instock/dinner.jpg", "$200.00", "A full coruse lobster dinner for you and a loved one, or hated one, we don't judge. Comes very fresh, nearly alive. Cook it yourself and live the dream of being a chef!"),
    (1509, "Corgi Print", "/media/instock/dogie.jpg", "$50.00", "Need something cool to hang up in your home? I don't think it gets much better than this. This is the most chill print you could possibly have. Buy three."),
    (0023, "Gator Improvement Kit", "/media/instock/gatorbravo.jpg", "$4000.00", "Take your gator to the next level. This cartoon based kit gives them a cool wig and glasses (Not the same as 'Many Shades' those are different glasses). Great for mothers day!"),
    (8367, "Many Shades (Bulk)", "/media/instock/glasses.png", "$999.99", "If you needed a lot of sun glasses this is for you. 20,000 peices."),
    (6854, "Very Nice Dog", "/media/instock/goodpic.jpg", "Free", "This is an image of a dog that loves you. You can have it :)."),
    (4432, "Some Kind of Dog From an Hourglass", "/media/instock/hourglass.gif", "$30.00", "Some kind of dog, from an hourglass? An hourglass dog? Starts at $30.00."),
    (1998, "Used Ice Cream Cone", "/media/instock/icecream.jpg", "$2.50", "Slightly used icecream cone. Shipped to you by the dog who is eating it. If product never arrives please do not email us."),
    (2763, "Fork + Meatball", "/media/instock/important.png", "$5.00", "This VERY CHEAP fine art item is a steal at this price. The meatball and fork combo meaning more than you could fathom, even with your art degree. Dog is no included but will come by your home to stare at the amazing art."),
    (9093, "Very Cool Print", "/media/instock/ladybird.png", "$9999.99", "Fine art at its fine art best. Hank Hill and his pet Ladybird wearing cowboy hats. This powerful painting will bring joy and prosperity to any who view it. Orders will be shipped once we get more printer ink."),
    (1001, "Rat", "/media/instock/rat.png", "$14.00", "Stalking at night and preying at night, this rat has infested our storehouse and we want him gone. Still going to charge you to take it though."),
    (5404, "Glass of Water", "/media/instock/realwater.png", "$0.00", "A glass of water from your tap. Go get yourself one, it's litterally free."),
    (2774, "Shrek Costume", "/media/instock/shrek.jpg", "$15.00", "Shrek maybe? Someone left this at our interns house and they want it gone. Please buy it."),
    (7701, "Suit of Armor", "/media/instock/sirrambo.png", "$5000.00", "A fine suit of armor worn by good knigh Sir Rambo himself. A fine peice of history. Functional and stylish! Not for kids."),
    (8899, "Used Waffle", "/media/instock/waffle.jpg", "$20.00", "Slightly used waffle. Fresh from the toaster. You will have to fight the dog for it. Not liable for any damages from said fight.")
