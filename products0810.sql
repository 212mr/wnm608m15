-- phpMyAdmin SQL Dump
-- version 4.0.10.18
-- https://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Aug 10, 2017 at 05:04 PM
-- Server version: 5.6.36-cll-lve
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `wnm608mengruzhang`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE IF NOT EXISTS `products` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL,
  `slogan` varchar(128) NOT NULL,
  `price` decimal(12,2) NOT NULL,
  `image` varchar(256) NOT NULL,
  `description` text NOT NULL,
  `date_create` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=14 ;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `slogan`, `price`, `image`, `description`, `date_create`) VALUES
(1, 'LISIANTHUS', 'Beautiful lisianthus just for you. ', '12.00', 'image/prdct21.png', 'When bloomed to it''s fullest, Lisianthus can resemble a rose. With long layered stems of bell shaped ruffled blooms and almond shaped buds, these are the perfect elegant addition to any centerpieces and wedding bouquets. Plus, our flowers are grown on eco-friendly, sustainable farms and freshly cut when you order.\n<ul>\n    <li>Color: white</li>\n    <li>Flower: lisianthus - eustoma grandiflorum</li>\n</ul>\n', '2017-07-28 22:15:17'),
(2, 'PEGASUS', 'Simply sweet, the way things should be. ', '26.00', 'image/prdct2.png', 'The soft pink petals of this premium bouquet are accented with a tinge of peach, resulting in a look that as sweet as\n    cream. Give these clean, confident garden roses to yourself or someone you love as a reminder that life is peachy.\n    \n    These orange roses are as bright and cheery as a sunny day at the beach. Sustainably grown in California, our flowers are some of the freshest, most vibrant roses you''ll ever find. Delivered next day from our farms on the\n    California coast to your recipient''s door. <ul>\n    <li>Color: pink orange</li>\n    <li>Flower: rose - rosaceae</li>\n</ul>\n\n', '2017-07-28 22:15:17'),
(3, 'MAGNETIC', 'Roses with a California twist.', '26.00', 'image/prdct3.png', 'Simply put, these premium orange roses are top-notch. They are a magical sight when fully bloomed! Grown on the side\n    of a volcano and cut-to-order, this bouquet of South American flowers contains all the beauty and magic of a\n    breathtaking sunrise. Plus, our flowers are delivered straight from eco-friendly, sustainable farms to your recipient''s door.\n\n    Our light pink roses are full of life and natural beauty. They truly are a heavenly bunch! Sustainably grown in\n    California, these flowers are some of the freshest, most vibrant roses you''ll ever find. <ul>\n    <li>Color: pink orange</li>\n    <li>Flower: rose - rosaceae</li>\n</ul>\n', '2017-07-28 22:32:16'),
(4, 'DARK KNIGHT', 'The Premium Rose Collection.', '48.00', 'image/prdct4.png', 'It''s the world''s biggest, brightest ''genus rosa''! Theses blooms will make you go\n    wow. They start off as a darker shade, and open to be blue-to-violet wonders. A lil'' magic trick, and a sweet one at\n    that! Our premium roses are sourced from a Fair Trade certified farm that practices responsible labor and\n    eco-friendly farming. A special gift available for delivery all across the USA!<ul>\n    <li>Color: dark blue / violet</li>\n    <li>Flower: rose - rosaceae</li>\n</ul>\n', '2017-07-29 21:29:01'),
(5, 'DRAGONFLY', 'If you are looking to impress someone special.', '22.00', 'image/prdct5.png', 'If you are looking to impress someone special, send them this living jewel! Our double-stemmed yellow orchid is\n    perfect for your home or office. Plus, it includes a biodegradable eco-pot complete with care instructions to maximize the life of your gift. Ships next day from our farms on the California coast to your recipient''s door.<ul>\n    <li>Color: yellow</li>\n    <li>Flower: orchid - orchidaceae</li>\n</ul>', '2017-07-29 21:30:21'),
(6, 'CABANA', 'Style that''s fresh!', '22.00', 'image/prdct6.png', 'Know someone in need of an instant pick-me-up? A gift of fresh daisies is the best way to brighten their day! Set in\n    a charming picket fence planter with a sweet daisy design, our white daisy plant will deliver smile after smile to\n    friends, family, anyone in you care about who could use some cheering up.\n<ul>\n    <li>Color: white</li>\n    <li>Flower: daisy - asteraceae</li>\n</ul>\n\n', '2017-07-29 21:31:29'),
(7, 'CHAMPAGNE', 'Mixed color mini callas.', '32.00', 'image/prdct7.png', 'Send elegant and long lasting mini calla lilies they''ll love. <ul>\n    <li>Color: white / yellow </li>\n    <li>Flower: calla - araceae</li>\n</ul>Perfect for any occasion and available in assorted\n    colors like purple, yellow, pink, and white. Cut to order and delivered straight from our sustainable farms! \n', '2017-07-29 21:32:30'),
(8, 'HEAVEN SCENT', 'Elegant, irresistible, and undeniably classy.', '36.00', 'image/prdct8.png', 'Why not put happiness on full display? It the greatest feeling in the world! This premium Bouq celebrates the\n    beauty and time-honored appeal of gorgeous white Garden Roses, a flower that been making people smile for centuries. Our flowers are grown on eco-friendly, sustainable farms and cut-to-order.\n<ul>\n    <li>Color: white</li>\n    <li>Flower: rose - rosaceae</li>\n</ul>\n\n', '2017-07-29 21:33:49'),
(9, 'BUZZWORTHY', 'an exotic touch to the home', '36.00', 'image/prdct9.png', 'Bromeliad plants provide an exotic touch to the home and bring a sense of the tropics and sun-kissed climates.\n    Growing a bromeliad as a houseplant is easy and brings interesting texture and color to the interior garden.\n<ul>\n    <li>Color: yellow / orange</li>\n    <li>Flower: bromeliad - monocot</li>\n</ul>\n\n', '2017-07-29 21:34:40'),
(10, 'DIVINE', 'a never-ending succession\r\n', '20.00', 'image/prdct10.png', 'This tropical genus brings the mid-to-late-season garden a never-ending succession of flowers in glorious shades and\n    shapes. Dahlias vary from under 12 to 7 giants; their flowers may be demure buttons or huge, blowsy blooms. Most are sold as tubers and should be planted in well-drained soil after the last spring frost.The blooms are an ivory\n    shade of white with lilac centers and hints of lilac at the tips of the petals. ''Eveline'' is among the tallest varieties we offer, with long stems that are excellent for cutting.\n<ul>\n    <li>Color: white / pink</li>\n    <li>Flower: dahlia - asteraceae</li>\n</ul>\n\n', '2017-07-29 21:36:20'),
(11, 'JULIET', 'The Scent Of Love\r\n', '12.00', 'image/prdct11.png', 'Topped with pure white blooms, this elegant hydrangea arrives ready for display in a dotted metal pot topped with\n    moss.Hydrangeas are extremely vigorous, long-lived shrubs that offer varied and extravagant blooms throughout summer and into fall, when many shrubs have completed their show. Modern selections come in enticing shades of white,\n    cream, pink, blue, and red, and in lacecap and oakleaf shapes as well as the familiar mophead. The big, rounded flower clusters make handsome dried arrangements.\n<ul>\n    <li>Color: white </li>\n    <li>Flower: hydrangea - hydrangeaceae</li>\n</ul>', '2017-07-29 21:37:50'),
(12, 'SHERBET', 'A joyful moment\r\n', '12.00', 'image/prdct12.png', 'Our bright orange tulips have a bold, distinct color that lights up any room. This all-about-color bouquet has\n    taken trending to the next level. Joyful tulips explode in bursts of white, red, pink, purple, and orange color for days! It''s a bouquet that''s basically impossible not to love.\n<ul>\n    <li>Color: orange / pink </li>\n    <li>Flower: tulip - liliaceae</li>\n</ul>', '2017-07-29 21:39:17'),
(13, 'New Day', 'Tomorrow is a new day!', '99.00', 'image/prdct1.png', 'yeah!Tomorrow is a new day!\r\nTomorrow is a new day!', '2017-08-10 16:00:57');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
