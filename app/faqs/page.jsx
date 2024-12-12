"use client";
import InternalHero from "@/components/InternalHero";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const AccordionSection = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700">
      <button
        className="w-full flex justify-between items-center p-4 hover:bg-white hover:bg-opacity-10 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-left">{title}</h3>
        <span className="text-2xl">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="p-4 prose prose-invert max-w-none">{content}</div>
      )}
    </div>
  );
};

const faqSections = [
  {
    title: "Event Times and Location",
    content: (
      <div>
        <h4>Event Times:</h4>
        <ul>
          <li>Box Office Opens: 11:00 AM</li>
          <li>Doors: 12:00 PM</li>
          <li>Entertainment Starts: 1:00 PM</li>
          <li>Last Entry: 8:00 PM</li>
          <li>
            Subject to change, scheduled headline end of show time: 10:30 PM
          </li>
        </ul>

        <h4>Location:</h4>
        <p>
          Bludfest is located at the Milton Keynes National Bowl, Watling St,
          Milton Keynes MK5 8AA. The venue has three entrances:
        </p>
        <ul>
          <li>
            If you're arriving on foot, please use the north gate on Chaffron
            Way. The exact location of the gate can be found on this What3Words
            link.
          </li>
          <li>
            For any customers with accessibility requirements, please head to
            the dedicated accessible entrance at this What3Words Link.
          </li>
          <li>
            For those arriving by taxi or vehicle drop-off, there's a designated
            point on Kelvin Drive and exit via Davey Avenue. The location can be
            found on this What3Words link.
          </li>
        </ul>
        <p>
          All entrances will be clearly signposted upon arrival at the site.
        </p>
      </div>
    ),
  },
  {
    title: "Tickets",
    content: (
      <div>
        <p>
          Tickets can be purchased from authorised ticket agents: AXS and
          Ticketmaster. Once purchased, tickets cannot be exchanged, refunded or
          returned unless the event is cancelled. Please refer to our Terms and
          Conditions.
        </p>
        <p>
          We advise that the event may not be suitable for young children,
          especially those under 2yrs of age. However, if you do arrive with a
          non-ticketed child under 2yrs old, please report to the box office
          where an attendant will provide a complementary ticket. All children
          3yrs and older will need to have a purchased ticket. Buggies and
          necessary care bags will be permitted, but please be advised that
          additional security checks may take place.
        </p>
        <p>
          Customer requiring accessible features must purchase their General
          Admission tickets through AXS only: we offer a range of accessible
          facilities to ensure your festival experience is as smooth and
          enjoyable as possible. More information about applying for these
          facilities can be found on the accessibility page.
        </p>
        <p>
          For any questions relating to tickets, please contact your point of
          purchase.
        </p>

        <h4>Re-Entry:</h4>
        <ul>
          <li>
            No Re-entry: Once you leave the festival grounds, re-entry is NOT
            permitted. Ensure you have everything you need before entering.
          </li>
          <li>
            Plan Ahead: Make sure to plan your day accordingly and bring all
            necessary items with you to avoid the need to leave and re-enter.
          </li>
          <li>
            Ticket Scanning: Upon entry, your ticket will be scanned. Please be
            aware, signal in the area can be restricted when there's a lot of
            people around. Please download your ticket in advance or print your
            ticket off for a quicker entrance.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Items You Can & Can't Bring",
    content: (
      <div>
        <p>
          To ensure the safety and enjoyment of all attendees, please adhere to
          the following guidelines regarding items allowed and prohibited at
          Bludfest. Failure to comply with these rules may result in refusal of
          entry or ejection from the festival grounds.
        </p>

        <h4>Prohibited Items:</h4>
        <ul>
          <li>
            Drugs: Illegal substances, including 'legal highs' and Nitrous
            Oxide, are strictly prohibited. We have a zero-tolerance policy for
            drug dealing and consumption.
          </li>
          <li>
            Alcohol and Liquids: No alcohol or liquids of any kind are allowed
            (with the exception of water in unopened plastic containers of up to
            500ml). Empty plastic refillable bottles (up to 500ml) are
            permitted, but no metal bottles. Free water points are located
            across the festival.
          </li>
          <li>Weapons: No knives or weapons of any kind.</li>
          <li>
            Aerosols: No aerosols, sprays, or pressurised containers are
            permitted.
          </li>
          <li>Flags: No flags allowed.</li>
          <li>Glass: No glass items.</li>
          <li>Umbrellas: No umbrellas are allowed.</li>
          <li>Food: No food is allowed.</li>
          <li>Perfumes/Aftershaves: No perfumes or aftershaves.</li>
          <li>
            Dogs: No dogs, except registered assistance dogs. Please make us
            aware of this beforehand.
          </li>
          <li>Flares/Fireworks: No flares or fireworks.</li>
          <li>Bicycles: No bikes allowed.</li>
          <li>
            Re-entry: No re-entry is permitted once you leave the festival
            grounds.
          </li>
          <li>Laser Pens/Pointers: No laser pens or pointers.</li>
          <li>
            Professional Cameras: No professional cameras, including camera
            equipment such as stands, lenses, and selfie sticks.
          </li>
          <li>
            Audio Recording Equipment: No audio recording equipment or
            noise-making devices.
          </li>
          <li>
            Personal Vehicles: No skateboards, rollerblades, hover-boards,
            scooters, bicycles, or other personal motorised and non-motorised
            vehicles.
          </li>
          <li>
            Marketing Materials: No unauthorised solicitation or marketing
            materials (e.g., handbills, flyers, stickers).
          </li>
          <li>Drones: No drones or unmanned aerial systems.</li>
          <li>High-Visibility Clothing: No high-visibility vests or coats.</li>
          <li>
            Large Bags: No rucksacks or large bags. Small bags (not rucksacks)
            are allowed with dimensions W21cm x H30CM x D8cm (A4 Size).
          </li>
          <li>Selfie Sticks: No selfie sticks.</li>
          <li>
            Filming/Photography: No professional filming/photography equipment
            is permitted entry to the event site.
          </li>
          <li>
            Camping: Bludfest is not a camping event, any camping equipment
            including tents & gazebo's are not permitted entry.
          </li>
          <li>
            Chairs: Camping chairs are permitted but stewards will move any
            customers with camping chairs in crowded and unsafe areas. If
            camping chairs are left unattended, they will be removed by our
            stewards. Camping chairs are not permitted in any of the tented
            structures within the arena. Camping chairs are not permitted on the
            accessible walkways – these walkways must be kept clear at all
            times.
          </li>
        </ul>

        <h4>Permitted Items:</h4>
        <ul>
          <li>
            Empty Plastic Refillable Bottles: Up to 500ml (no metal bottles).
          </li>
          <li>
            500ml of Water: in unopened plastic containers of up to 500ml.
          </li>
          <li>
            Sun Cream/Lotion: Sized at 200ml or less in original containers.
          </li>
          <li>
            Vape Liquid/Eye Drops: Standard plastic 10ml containers (contents
            may be tested).
          </li>
          <li>Small Bags: Dimensions up to W21cm x H30CM x D8cm (A4 Size).</li>
        </ul>

        <h4>Essentials to Bring:</h4>
        <ul>
          <li>
            Ticket and ID: Your festival ticket and a valid form of
            identification.
          </li>
          <li>Payment Card: For food, drinks, merchandise, and emergencies.</li>
          <li>
            Phone and Charger: A portable phone charger/power bank is
            recommended.
          </li>
        </ul>

        <h4>Personal Items:</h4>
        <ul>
          <li>Small Bag: No larger than an A4 piece of paper.</li>
          <li>Comfortable Clothing</li>
          <li>Hat and Sunglasses</li>
          <li>Comfortable Footwear: You'll be on your feet a lot.</li>
          <li>Sunscreen and Lip Balm: Ensure sunscreen is 200ml or less.</li>
          <li>
            Reusable Water Bottle: A 500ml clear empty water bottle, or water in
            unopened plastic containers of up to 500ml (refill stations will be
            available on-site).
          </li>
          <li>Earplugs: Protect your hearing.</li>
          <li>
            Personal Medications: Any medication that you would normally take,
            but no more than you would personally expect to take over the
            duration of the event.
          </li>
          <li>Registered Assistance Dogs: Allowed.</li>
        </ul>

        <h4>Important Notes:</h4>
        <ul>
          <li>
            Searches: Admission is subject to search. Compliance with security
            checks is mandatory.
          </li>
          <li>
            Longer Wait Times: To avoid long wait times, consider bringing only
            essential items in a small bag.
          </li>
          <li>
            Safety: Any items deemed dangerous or inappropriate by security
            staff will be confiscated.
          </li>
          <li>
            Enjoyment: Be mindful of your fellow attendees to ensure a pleasant
            experience for everyone.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Payment System",
    content: (
      <div>
        <h4>Cashless System:</h4>
        <ul>
          <li>
            Bar System: We operate a cashless bar system. Drinks can only be
            purchased using chip & pin or contactless payment methods.
          </li>
          <li>
            Food Vendors: All food vendors also accept chip & pin and
            contactless payments for your convenience.
          </li>
        </ul>

        <h4>Important Notes:</h4>
        <ul>
          <li>
            Efficiency: Using chip & pin or contactless payments will speed up
            transactions and reduce wait times.
          </li>
          <li>
            Prepare: Ensure your card supports contactless payments and has
            sufficient funds before arriving at the festival.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Medical Assistance and Hygiene",
    content: (
      <div>
        <h4>Medical Assistance:</h4>
        <ul>
          <li>
            Medical/Welfare Tents: Clearly signposted medical and welfare tents
            are available on-site. If you or your friends feel unwell, or
            require medical attention, seek help immediately at these locations.
          </li>
          <li>
            Medication Storage: Medication can be safely stored and refrigerated
            at the medical tent on site if required. Medications requiring
            injection must be stored in the medical tent. Please remember that
            all medication must be self-administered.
          </li>
          <li>
            Permission: Please bring any medication that you would normally
            take, but no more than you would personally expect to take over the
            duration of the event. All medication must be clearly labelled as
            prescribed and the name on the prescription label must match that of
            the ticket holder.
          </li>
          <li>
            Emergency Situations: For any emergencies, approach the nearest
            security personnel or visit the medical tent. Trained medical staff
            are available to assist you at all times.
          </li>
        </ul>

        <h4>Hygiene Facilities:</h4>
        <ul>
          <li>
            Toilets: Toilets are conveniently located throughout the festival
            site. Please refer to the site map for exact locations.
          </li>
          <li>
            Drinking Water: Free water refill stations are available across the
            festival. Bring an empty plastic refillable bottle (up to 500ml) to
            stay hydrated.
          </li>
          <li>
            Hand Sanitiser: Hand sanitiser stations are placed near food
            vendors, toilets, and throughout the festival grounds for your
            convenience.
          </li>
        </ul>

        <h4>Personal Medications:</h4>
        <ul>
          <li>
            Carry Essentials: Always carry essential medications with you and
            keep them secure. Do not share medications with others.
          </li>
        </ul>

        <h4>Important Notes:</h4>
        <ul>
          <li>
            Health and Safety: Your health and safety are our top priority.
            Follow the guidelines and instructions provided by medical and
            security staff at all times.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Travel Information & Parking",
    content: (
      <div>
        <h4>Directions:</h4>
        <ul>
          <li>
            Location: The event is located at the Milton Keynes National Bowl,
            Watling St, Milton Keynes MK5 8AA. Follow the signs and directions
            to reach the venue.
          </li>
          <li>
            Public Transport: The venue is well-connected by public transport.
            Use trains, buses, and coaches for convenient travel to and from the
            festival.
          </li>
          <li>
            Walking: If you are arriving on foot, use the north gate on Chaffron
            Way. The exact location of the gate can be found using this
            What3Words link.
          </li>
        </ul>

        <h4>Traveling by Train:</h4>
        <ul>
          <li>
            Nearest Station: The nearest railway station is Milton Keynes
            Central, with services operated by Avanti West Coast and London
            Northwest Railway.
          </li>
          <li>
            Walking Route: From Milton Keynes Central, exit right and walk for
            50 meters. Turn right onto a footbridge over the railway line. This
            pedestrian cycleway "Leisure Route 51" is a 20-minute walk to the
            Bowl and will be signposted with event signage.
          </li>
          <li>
            Plan Ahead: Bear in mind that the return journey may take longer due
            to the number of attendees exiting the venue simultaneously. Ensure
            you allow enough time to make necessary rail connections when
            leaving the venue.
          </li>
        </ul>

        <h4>Traveling by Car & Parking:</h4>
        <p>
          Car parking is now available to book online. To book your parking
          space please use the Park The Car Here Booking Platform.
        </p>
        <p>
          Directions to Parking: Parking details and directions will be provided
          with your parking ticket. Follow the signs and directions to the
          orange car park.
        </p>

        <h4>Coach Travel:</h4>
        <p>
          By Coach: Big Green Coach is providing hassle-free and sustainable
          coach returns from multiple locations including:
        </p>
        <p>
          Arle Court (for Cheltenham & Gloucester), Basingstoke, Birmingham,
          Bristol, Cambridge, Cardiff, Chelmsford, Colchester, Coventry, Derby,
          Ipswich, Leeds, Leicester, Liverpool, London Victoria, Luton,
          Manchester, Mansfield East Midlands Outlet, Milton Keynes Bowl,
          Newport, Northampton, Norwich, Nottingham, Oxford, Reading (Winnersh),
          Sheffield, Southampton, Stoke on Trent, Swindon, Watford, Winchester
          (St Catherines), Wolverhampton.
        </p>
        <p>
          Your carbon-neutral coach will arrive at MK Bowl before the music
          starts and return to your pick-up location after the show has
          finished. You won't miss a minute of the action! Guarantee your seat
          with the UK's largest events travel company from just £42 here.
        </p>
      </div>
    ),
  },
  {
    title: "Security and Stewarding",
    content: (
      <div>
        <h4>Security Measures:</h4>
        <ul>
          <li>
            Admission Search: All attendees are subject to a search upon entry.
            Compliance with security checks is mandatory. Refusal to be searched
            will result in denial of entry.
          </li>
          <li>
            Prohibited Items: Ensure you do not bring any prohibited items
            listed in the festival guidelines. Confiscated items will not be
            returned.
          </li>
          <li>
            CCTV Monitoring: The festival site is monitored by a comprehensive
            CCTV system to ensure the safety and security of all attendees.
          </li>
        </ul>

        <h4>Stewarding:</h4>
        <ul>
          <li>
            Role of Stewards: Our dedicated team of stewards is here to ensure
            your comfort and safety throughout the event. Stewards are easily
            identifiable by their high-visibility vests.
          </li>
          <li>
            Assistance: Do not hesitate to approach a steward if you have any
            questions, need assistance, or experience any issues during the
            festival.
          </li>
          <li>
            Compliance: Follow all instructions and directions given by
            stewards. Non-compliance with steward instructions can result in
            removal from the festival grounds.
          </li>
        </ul>

        <h4>Safety Guidelines:</h4>
        <ul>
          <li>
            Emergency Procedures: In the event of an emergency, follow the
            instructions provided by security and stewards. Familiarise yourself
            with the location of emergency exits and medical/welfare tents.
          </li>
          <li>
            Lost & Found: If you lose something, visit the Lost & Found booth at
            the medical tent.
          </li>
          <li>
            Crowd Management: Be mindful of crowd density and avoid pushing or
            shoving. Respect personal space and ensure you do not block walkways
            or emergency exits.
          </li>
        </ul>

        <h4>Challenge 25:</h4>
        <p>
          ID Checks: We operate a Challenge 25 policy for alcohol purchases. If
          you look under 25, be prepared to show ID. Acceptable forms of ID
          include:
        </p>
        <ul>
          <li>Passport (original, not a photocopy)</li>
          <li>
            Proof of Age Card (must be part of the PASS scheme with their
            hologram)
          </li>
          <li>
            Full or provisional photo card driving license issued by the DVLA
          </li>
        </ul>
        <p>
          Alcohol Policy: It is illegal to purchase alcohol for anyone under 18.
          Violation of this policy will result in ejection from the festival.
        </p>
      </div>
    ),
  },
];

const FAQs = () => {
  const { scrollYProgress } = useScroll();
  const cloudsScale = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const batsScale = useTransform(scrollYProgress, [0, 0.2], [1, 0], {
    clamp: false,
  });
  return (
    <div className="bg-black text-white min-h-screen relative">
      <div
        className={`fixed inset-0 bg-dottedTexture1 z-20 bg-contain opacity-20  pointer-events-none invert`}
      />
      <img
        src="/dom_zombie.png"
        alt="Dom"
        className="w-[60vw] opacity-30 lg:opacity-1 md:w-[50vw] fixed -bottom-[0vw] md:-bottom-[7vw] lg:-bottom-[3vw] xl:-bottom-[1vw] -left-[10vw] "
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-screen absolute top-0 bottom-0 object-cover overflow-visible z-0"
        style={{ scale: cloudsScale }}
      >
        <Image
          width="1000"
          height="1000"
          quality={100}
          src="/CLOUDS2.png"
          alt="Clouds"
          className="w-screen -mt-[10vw]  max-h-[30vw] absolute inset-0"
        />
      </motion.div>
      <InternalHero
        className="mb-8"
        text={`Bludfest 2025 - Frequently Asked Questions`}
      />
      <div className="container mx-auto p-4 relative z-10">
        <p className="mb-8 text-center">
          This page aims to give you all the general information you need about
          facilities, restrictions, and prohibited items.
        </p>
        <div className="space-y-2">
          {faqSections.map((section, index) => (
            <AccordionSection
              key={index}
              title={section.title}
              content={section.content}
            />
          ))}
        </div>
        <p className="mt-8 text-center italic">
          Thank you for your cooperation and understanding. We look forward to
          an enjoyable and safe festival experience at Bludfest.
        </p>
      </div>
    </div>
  );
};

export default FAQs;
