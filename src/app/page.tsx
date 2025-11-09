"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Calendar, ChefHat, Sparkles, Star } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="medium"
      sizing="small"
      background="plain"
      cardStyle="glass-flat"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="minimal"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Menu", id: "feature" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonial" },
            { name: "Reservations", id: "contact" }
          ]}
          brandName="Lumière"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Culinary Excellence Redefined"
          description="Experience the artistry of fine dining with locally-sourced ingredients and innovative techniques"
          tag="Fine Dining"
          tagIcon={Sparkles}
          mediaItems={[
            {
              imageSrc: "https://pixabay.com/get/gac280bfc708d11288c23e8f296df0def8a06b0ab4b9278f1372a2a212b76f68e08569724b26e8101c419d5b48cb504aa5a68fbd3c99d4adb878815bc15d19d65_1280.jpg",
              imageAlt: "Elegant restaurant interior"
            },
            {
              imageSrc: "https://pixabay.com/get/g09ca373ec4605c3699fcbff86e19ec7df5d15bb05315238bb827382c1c7d1537ee1cdc020fbcb90745c83bf434b0aac3d180d77b0c121a65237d102ccd40ac5d_1280.jpg",
              imageAlt: "Signature dish presentation"
            },
            {
              imageSrc: "https://pixabay.com/get/g15cf17208f28d923d5f24028b141bd1544cd27eab9189555a76747ef844e1ca67a249bf0f51b36a8fd7b99ac9c772c36e69180afd1d7f2174188e85e78c29ed6_1280.jpg",
              imageAlt: "Artistic food plating"
            },
            {
              imageSrc: "https://pixabay.com/get/g5af6661f6c69f9f3f6c3c255ef7df21dc9b6efc1cf8e151caba73300d634ac179d1620671049d99323ff58565a3c029dfcda62d2bd47e0eee4552fea3ccf0bc7_1280.jpg",
              imageAlt: "Fine dining dessert"
            },
            {
              imageSrc: "https://pixabay.com/get/g90081b550629830b0be6faf81f22215b6086f095accf8c4f8e6b0b6fe20d29aea4f8488a5429a043a728af16b62120584f2c1859177858e5aa7840314b342944_1280.jpg",
              imageAlt: "Restaurant ambiance"
            }
          ]
          buttons={[
            { text: "View Menu", href: "feature" },
            { text: "Make Reservation", href: "contact" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Story"
          description={[
            "At Lumière, we believe dining is an art form that engages all the senses. Our passion for culinary excellence drives us to create unforgettable experiences.",
            "Each dish tells a story, crafted with the finest seasonal ingredients and presented with artistic flair that reflects our commitment to gastronomic innovation."
          ]}
          buttons={[
            { text: "Meet Our Chef", href: "about" }
          ]}
          showBorder={true}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardThree
          title="Signature Experiences"
          description="Discover our carefully curated menu featuring seasonal specialties and chef's masterpieces"
          tag="Menu"
          tagIcon={ChefHat}
          features={[
            {
              id: "01",
              title: "Tasting Menu",
              description: "A seven-course journey through seasonal flavors with wine pairings",
              imageSrc: "https://pixabay.com/get/g09ca373ec4605c3699fcbff86e19ec7df5d15bb05315238bb827382c1c7d1537ee1cdc020fbcb90745c83bf434b0aac3d180d77b0c121a65237d102ccd40ac5d_1280.jpg",
              imageAlt: "Tasting menu presentation"
            },
            {
              id: "02",
              title: "Chef's Special",
              description: "Daily creation featuring the finest market ingredients",
              imageSrc: "https://pixabay.com/get/g15cf17208f28d923d5f24028b141bd1544cd27eab9189555a76747ef844e1ca67a249bf0f51b36a8fd7b99ac9c772c36e69180afd1d7f2174188e85e78c29ed6_1280.jpg",
              imageAlt: "Chef's special dish"
            },
            {
              id: "03",
              title: "Artisan Desserts",
              description: "Handcrafted sweet endings that complete your dining experience",
              imageSrc: "https://pixabay.com/get/g5af6661f6c69f9f3f6c3c255ef7df21dc9b6efc1cf8e151caba73300d634ac179d1620671049d99323ff58565a3c029dfcda62d2bd47e0eee4552fea3ccf0bc7_1280.jpg",
              imageAlt: "Artisan dessert"
            }
          ]
          buttons={[
            { text: "View Full Menu", href: "https://menu.example.com" }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="Guest Experiences"
          description="Hear what our guests say about their memorable dining experiences"
          tag="Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Isabella Martinez",
              role: "Food Critic",
              company: "Culinary Weekly",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g2e33e4204f55f71c9078a13ecec0c47c29beab8e9e6cfc7d7b2827e6c4a7f2fc2d375c297cd38182208357a251589d23d9833d32eb3cdb7d1b2665bba791262d_1280.jpg",
              imageAlt: "Isabella Martinez dining"
            },
            {
              id: "2",
              name: "James Wellington",
              role: "Executive",
              company: "Downtown Corp",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g4d1b8171c8d6cc5566785d222b5d38ab7d594b9772d63d92936ed978fb37fa0596d3008cea591e36413a31abe41967664b744689bca5f6000631bfef0ec11c47_1280.jpg",
              imageAlt: "James Wellington at dinner"
            },
            {
              id: "3",
              name: "Sophie Chen",
              role: "Lifestyle Blogger",
              company: "City Living",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gf693e244c7a97aab5f5224e0a833ffce62ec88eb080b4a17e215893153fb79acd90136d4ad90b27992877ff81ce7f83b36e674fb0a1ba38c8efa9ea794480d76_1280.jpg",
              imageAlt: "Sophie Chen dining experience"
            },
            {
              id: "4",
              name: "Michael Roberts",
              role: "Event Planner",
              company: "Premier Events",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g3c2834d8f0f747574bb41b394370f3a57349b317ebd712177374e4d65619c8267ae753afd67cabda8e0297711a16453262a37ae5fe99a45abb9fe02fbc4b3f70_1280.jpg",
              imageAlt: "Michael Roberts restaurant visit"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Reservations"
          tagIcon={Calendar}
          title="Reserve Your Table"
          description="Join us for an extraordinary culinary journey. Book your table today and experience fine dining at its finest."
          inputPlaceholder="Enter your email"
          buttonText="Book Now"
          termsText="By booking, you agree to our reservation policy. We look forward to welcoming you."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Lumière"
          copyrightText="© 2025 | Lumière Restaurant"
          columns={[
            {
              title: "Restaurant",
              items: [
                { label: "Menu", href: "feature" },
                { label: "About Us", href: "about" },
                { label: "Chef", href: "about" }
              ]
            },
            {
              title: "Visit",
              items: [
                { label: "Reservations", href: "contact" },
                { label: "Location", href: "contact" },
                { label: "Hours", href: "contact" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "Reviews", href: "testimonial" },
                { label: "Events", href: "https://events.example.com" },
                { label: "Contact", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}