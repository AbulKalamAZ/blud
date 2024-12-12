"use client";

import InternalHero from "@/components/InternalHero";
import Image from "next/image";
import Link from "next/link";

const Accessibility = () => {
  return (
    <div className="relative bg-black text-white">
      {/* Flame Images */}
      <Image
        width="1000"
        height="1000"
        quality={100}
        src="/flame1.png"
        alt="Flame"
        className="w-full rotate-90 fixed top-[50vw] w- h-auto -left-[37vw] opacity-50"
      />
      <Image
        width="1000"
        height="1000"
        quality={100}
        src="/flame2.png"
        alt="Flame"
        className="w-full  -rotate-90  fixed top-[50vw] w- h-auto -right-[37vw] opacity-50"
      />

      <InternalHero
        className="mb-8"
        text="Bludfest 2025 Accessibility Information"
      />
      <div
        className={`fixed inset-0 bg-dottedTexture1 z-20 bg-contain opacity-20 pointer-events-none invert`}
      />

      <div className="relative w-full overflow-hidden z-10">
        <div className="text-white z-20">
          <div className="container mx-auto px-4">
            <div className="p-6 sm:p-12">
              <div className="max-w-5xl mx-auto space-y-20 prose prose-invert prose-a:text-pink-500 prose-a:no-underline hover:prose-a:underline">
                {/* Introduction Section */}
                <section>
                  <h1>Bludfest 2025 Accessibility Information</h1>
                  <p>
                    An Easy Read guide is available to download{" "}
                    <Link target="_blank" href="/ezg.pdf">
                      HERE
                    </Link>
                    .
                  </p>
                  <p>
                    A Large Print version is available to download{" "}
                    <Link target="_blank" href="/lg.pdf">
                      HERE
                    </Link>
                    .
                  </p>
                  <p>
                    You can chat with other accessible Bludfest goers on Discord{" "}
                    <Link
                      target="_blank"
                      href="https://discord.com/invite/3rEA63UcxG"
                    >
                      HERE
                    </Link>
                    .
                  </p>
                  <p>
                    The accessible site map will be available to view in due
                    course.
                  </p>

                  <p>
                    At Bludfest, we are committed to creating an inclusive and
                    welcoming environment for all festival-goers. Ensuring that
                    everyone can enjoy the festival is at the heart of what we
                    do, and we strive to make Bludfest 2025 as accessible as
                    possible for d/Deaf, Disabled, and neurodivergent attendees.
                    We have made significant improvements for 2025, and we
                    continue to work with accessibility experts and
                    organisations to ensure that our facilities meet the highest
                    standards.
                  </p>

                  <p>
                    A new email address for accessibility enquiries has been set
                    up for this year's festival. If you have any questions or
                    need assistance regarding accessibility, please feel free to
                    contact us at{" "}
                    <Link href="mailto:accessibility@bludfest.org">
                      accessibility@bludfest.org
                    </Link>
                    .
                  </p>

                  <p>
                    Please read all the information below carefully so that you
                    are fully informed about the accessible applications process
                    and accessible facilities at Bludfest in 2025. Additional
                    information will be provided in due course.
                  </p>
                </section>

                {/* Application Process Section */}
                <section>
                  <h2>Accessible Facilities Application Process</h2>
                  <p>
                    We offer a range of accessible facilities to ensure your
                    festival experience is as smooth and enjoyable as possible.
                  </p>
                  <p>
                    If you wish to use the accessible facilities, you must
                    complete our Accessibility Application Form. More
                    information can be found below.
                  </p>
                </section>

                {/* Access Card Scheme Section */}
                <section>
                  <h2>Access Card Scheme</h2>
                  <p>
                    We have partnered with Nimbus Disability and are introducing
                    the Access Card Scheme as the method of providing supporting
                    evidence when applying for accessible facilities at Bludfest
                    2025. This will allow us to fully understand all your access
                    requirements and validate access to facilities such as the
                    Viewing Platforms and Ground Floor Viewing Areas.
                  </p>

                  <p>
                    If you don't have an Access Card, no problem – you can apply
                    for a FREE Bludfest Digital Access Pass (DAP){" "}
                    <Link
                      href="https://app.accesscard.online/apply/bludfest/form/"
                      target="_blank"
                    >
                      HERE
                    </Link>
                    . Nimbus will process your DAP application quickly and you
                    can apply before tickets go on sale.
                  </p>

                  <p>
                    The DAP works in the same way as the Access Card, but is
                    purely digital and you will only be able to use it at
                    Bludfest. It will last for 3 years, so you're good to go for
                    the future too!
                  </p>

                  <p>
                    You can still decide to upgrade to the full Access Card to
                    be able to use this at live music venues, events, and
                    tourist attractions across the UK and beyond!
                  </p>

                  <p>
                    For help and support applying for your Access Card or DAP,
                    please visit the{" "}
                    <Link href="https://knowledge.accesscard.online/">
                      Access Card Support Page
                    </Link>
                  </p>
                </section>

                {/* Application Steps Section */}
                <section>
                  <h2>Applying for Accessible Facilities at Bludfest 2025</h2>
                  <p>
                    If you wish to use the accessible facilities, you will need
                    to follow these steps:
                  </p>

                  <div className="space-y-4">
                    <p>
                      <strong>Step 1: Purchase Your Ticket via AXS</strong> –
                      When ticket sales go live on AXS, buy your ticket. There
                      are 2 ticket types: General Admission and Guest Area. Buy
                      as many tickets as you need for your group. See the
                      Essential Companion ticket policy below if you require a
                      +1.
                    </p>

                    <p>
                      Please note that the Guest Area is located a considerable
                      distance from the Accessible Viewing Platform at the Main
                      Stage. While the Guest Area provides ground-level viewing,
                      it does not feature a raised platform. If you require
                      access to the Accessible Viewing Platforms, we recommend
                      selecting the ticket type that best suits your needs.
                    </p>

                    <p>
                      <strong>Step 2: Complete the Application Form</strong> –
                      Once you've purchased your ticket, fill out our
                      Accessibility Application Form. The form will go live here
                      on Wednesday 18th December. Use this form to request any
                      facilities you need, including a free Essential Companion
                      ticket if applicable.
                    </p>

                    <p>
                      Please have your ticket order number, and your Access Card
                      ID or Digital Bludfest Access Pass ID ready when
                      completing the application.
                    </p>

                    <p>
                      Please note that capacity is limited and spaces will go
                      quickly. It is essential to submit the Accessibility
                      Application Form online and apply for the facilities you
                      require. Please be aware that we are unable to guarantee
                      the use of accessible facilities to those that have not
                      been allocated them in advance.
                    </p>

                    <p>
                      <strong>Step 3: Wait for Confirmation</strong> – Our team
                      will review your application. Once your application is
                      processed, you will receive a confirmation email. Please
                      note: this may take between 4-6 weeks. Information packs
                      with further details will be sent to successful applicants
                      before the festival.
                    </p>
                  </div>

                  <p>
                    Please note that submitting the form does not automatically
                    guarantee allocation to all the accessible facilities. We
                    will ask for you to explain what you need and we will use
                    this in conjunction with your Access Card or DAP to make a
                    decision on which accessible facilities to allocate to you.
                  </p>

                  <p>
                    If you have any concerns about eligibility, contact us
                    before purchasing your ticket at{" "}
                    <Link href="mailto:accessibility@bludfest.org">
                      accessibility@bludfest.org
                    </Link>
                    .
                  </p>

                  <p>
                    Note: Accessible facilities are not intended for individuals
                    with temporary conditions such as broken bones, healing
                    wounds, or pregnancy. However, accessible viewing areas may
                    be available for these groups on the day, depending on
                    capacity.
                  </p>
                </section>

                {/* Essential Companion Ticket Policy */}
                <section>
                  <h2>Essential Companion Ticket Policy</h2>
                  <ul className="space-y-4">
                    <li>
                      Festival-goers who require the support of an Essential
                      Companion (+1) to attend the festival can request an
                      additional festival ticket at no extra cost via the
                      Accessibility Application Form.
                    </li>
                    <li>
                      This scheme is specifically for those who would be unable
                      to attend the festival without the assistance of an
                      Essential Companion (+1).
                    </li>
                    <li>
                      Please ensure you have purchased your own festival ticket
                      first, via AXS. Then, request an Essential Companion
                      ticket via the Accessibility Application Form.
                    </li>
                  </ul>

                  <h3 className="font-bold mt-6">Important Details:</h3>
                  <ul className="space-y-4">
                    <li>
                      Essential Companion tickets are issued on the
                      understanding that the Essential Companion is willing and
                      able to assist the access customer with the Accessible
                      Facilities Application Process (if needed) and provide
                      support throughout the festival.
                    </li>
                    <li>
                      Essential Companions must arrive and leave the festival
                      with the access customer they are supporting. They must
                      also be capable of assisting during an evacuation or
                      emergency if required.
                    </li>
                    <li>
                      The Essential Companion ticket scheme is only available
                      alongside a full paying ticket holder. Please purchase
                      your own ticket via AXS.
                    </li>
                  </ul>

                  <h3 className="font-bold mt-6">Additional Notes:</h3>
                  <ul className="space-y-4">
                    <li>
                      Children under 16 must be accompanied by a responsible
                      adult. Therefore they are only eligible for an Essential
                      Companion ticket if they require more than one Essential
                      Companion to attend.
                    </li>
                    <li>
                      Essential Companions should be over 18 unless otherwise
                      approved by the Accessibility Team.
                    </li>
                    <li>
                      Essential Companion tickets are provided free of charge.
                      Please do not purchase a ticket for your Essential
                      Companion, as it cannot be refunded.
                    </li>
                    <li>
                      If you have any questions or need further clarification,
                      please contact the Accessibility Team.
                    </li>
                  </ul>
                </section>

                {/* Transport and Parking */}
                <section>
                  <h2>Transport and Parking</h2>
                  <p>
                    The nearest railway station is Milton Keynes Central. The
                    station has step-free access.
                  </p>

                  <p>
                    The nearest bus stops are Kelvin Drive (Buses 8, 8A, 606)
                    which is 800m away, and Elfield Park Roundabout West (Buses
                    4, 604) which is 950m away.
                  </p>

                  <p>
                    Please note that parking is not included with your festival
                    ticket. All parking, including accessible parking, must be
                    purchased separately through the following link:{" "}
                    <Link href="https://officialmkeventparking.com/Events.aspx?CustomerId=147">
                      BOOK YOUR PARKING
                    </Link>
                  </p>

                  <p>
                    All parking is located on grass. However, wheelchair access
                    mats will be provided in the accessible car park to assist
                    with navigation where needed.
                  </p>

                  <p>
                    There will be an accessible drop-off point at the accessible
                    car park. You do not need to purchase accessible parking in
                    order to use the accessible drop-off point.
                  </p>

                  <p>
                    An accessible buggy service for those requiring it will
                    operate to transport customers to and from the accessible
                    car park to the dedicated accessible event entrance. This
                    service will begin when gates to the main arena are opened
                    and will continue at the end of the show until all customers
                    have left.
                  </p>
                </section>

                {/* Level and Physical Access */}
                <section>
                  <h2>Level and Physical Access</h2>
                  <p>
                    The main stage area is in a grass bowl, therefore if we do
                    have inclement weather there could be a few areas around the
                    site not suited for wheelchairs. The rest of the site is on
                    tarmac, concrete, gravel or trackway.
                  </p>

                  <p>
                    Walking distances across the site and more detail about the
                    terrain will be provided in due course. We are working hard
                    to make the site more accessible for 2025 and will provide
                    more detail in the coming months.
                  </p>
                </section>

                {/* Entrance and Accreditation */}
                <section>
                  <h2>Entrance and Accreditation</h2>
                  <p>
                    We have a dedicated accessible entrance. This entrance can
                    be found at Gate One and will be clearly signposted.
                  </p>

                  <p>
                    To assist you in finding the exact location of this gate, we
                    have provided a what3words link:{" "}
                    <Link href="https://w3w.co/welcome.rural.activism">
                      welcome.rural.activism
                    </Link>
                  </p>

                  <p>
                    There will be some accessible toilets at this entrance.
                    There is also seating available in the queue for those who
                    need it. If you have additional needs, please inform us on
                    the Accessibility Application Form.
                  </p>

                  <p>
                    There will be a mobile hearing / induction loop at the
                    accessible entrance.
                  </p>
                </section>

                {/* Bludfest Accessible Hub */}
                <section>
                  <h2>Bludfest Accessible Hub</h2>
                  <p className="font-bold">New for 2025!</p>
                  <p>
                    We're introducing the Bludfest Accessible Hub, a dedicated
                    area designed to provide additional support and information
                    for guests with access needs.
                  </p>

                  <p>
                    The Accessible Hub will be centrally located and staffed by
                    trained accessibility coordinators to assist with any
                    on-site needs, provide guidance on services, and offer a
                    quiet space to recharge. From here, you can access
                    information on additional facilities, rest between
                    performances, or receive assistance navigating the festival
                    grounds. There will also be charging facilities available
                    here.
                  </p>

                  <p>
                    Please apply to use this space on the Accessibility
                    Application Form.
                  </p>
                </section>

                {/* Accessible Viewing Platforms */}
                <section>
                  <h2>Accessible Viewing Platforms</h2>
                  <p>
                    In 2025 there will be an accessible viewing platform at the
                    main stage and at the second stage.
                  </p>

                  <p>
                    These raised platforms are solely for festival goers that
                    need to be seated to be able to watch the performances, plus
                    one accompanying person. You will require a "Viewing
                    Platform" lanyard symbol in addition to an accessible
                    wristband to use these spaces. Please apply for access to
                    the Viewing Platforms on the Accessibility Application Form.
                  </p>

                  <p>
                    The viewing platforms will get very busy so they can be
                    overwhelming for people who find crowded spaces difficult.
                  </p>

                  <ul className="space-y-4">
                    <li>
                      Chairs will be provided at the viewing platforms for those
                      who need them. The chairs are without arms.
                    </li>
                    <li>
                      The viewing platforms will have stewards checking
                      wristbands and ensuring customers are using the space
                      safely.
                    </li>
                    <li>
                      Wheelchair accessible toilets will be available at the
                      viewing platforms.
                    </li>
                    <li>
                      There will be a charging point available on the viewing
                      platforms.
                    </li>
                    <li>
                      Smoking and vaping are not permitted on the viewing
                      platforms.
                    </li>
                    <li>
                      Anyone found to be misusing the viewing platforms or
                      behaving in an unacceptable manner will be asked to leave
                      the platform.
                    </li>
                  </ul>
                </section>

                {/* Ground Floor Viewing Area */}
                <section>
                  <h2>Ground Floor Viewing Area</h2>
                  <p>
                    There will also be a ground level designated viewing area at
                    the main stage (in front of the viewing platform). This area
                    is suitable for festival goers who may find crowds
                    overwhelming, or may otherwise need to be separate from the
                    general standing area, plus one accompanying person.
                  </p>

                  <p>
                    You will require a "Ground Floor Viewing Area" lanyard
                    symbol in addition to an accessible wristband to use the
                    Ground Floor Viewing Area. Please apply for access to this
                    area on the Accessibility Application Form.
                  </p>

                  <ul className="space-y-4">
                    <li>
                      Chairs will be provided at the viewing area for those who
                      need them. The chairs are without arms.
                    </li>
                    <li>
                      Camping chairs are permitted in this area for those who
                      need them. Please do not leave any items unattended as
                      these will be removed.
                    </li>
                    <li>
                      The viewing area will have stewards checking wristbands
                      and ensuring customers are using the space safely.
                    </li>
                    <li>
                      Anyone found to be misusing the viewing area or behaving
                      in an unacceptable manner will be asked to leave the area.
                    </li>
                  </ul>
                </section>

                {/* Seating */}
                <section>
                  <h2>Seating</h2>
                  <p>
                    Camping chairs are permitted but stewards will move any
                    customers with camping chairs in crowded and unsafe areas.
                    If camping chairs are left unattended, they will be removed
                    by our stewards.
                  </p>

                  <p>
                    Camping chairs are not permitted in any of the tented
                    structures within the arena. Camping chairs are not
                    permitted on the accessible walkways - these walkways must
                    be kept clear at all times.
                  </p>

                  <p>
                    Seat sticks and all other mobility aids are permitted. You
                    do not need to apply to bring these.
                  </p>
                </section>

                {/* Accessible Toilets */}
                <section>
                  <h2>Accessible Toilets</h2>
                  <p>
                    There are accessible toilets located in every toilet block
                    at the festival.
                  </p>
                  <p>
                    There will also be accessible toilets located at the
                    accessible viewing platforms.
                  </p>
                  <p>
                    There will be one accessible toilet located in the Guest
                    area.
                  </p>

                  <p>
                    This year, all accessible toilets will be locked with RADAR
                    padlocks. This is to ensure the facilities are protected for
                    those who need them. Please bring your RADAR key with you to
                    the festival if you have one.
                  </p>

                  <p>
                    We will have a small number of RADAR keys available on site
                    for you to purchase if you need them. Please request this on
                    the Accessibility Application Form.
                  </p>

                  <p>
                    There will be a toilet queue jumping option available for
                    those with the WC symbol on their Access Card or Bludfest
                    Digital Access Pass. This is specifically for people with
                    continence issues. You must apply for this on the
                    Accessibility Application Form.
                  </p>

                  <p>
                    There will also be a Changing Places Unit available at the
                    Accessible Hub.
                  </p>

                  <p>All accessible toilets are gender neutral.</p>
                </section>

                {/* Food and Drink */}
                <section>
                  <h2>Food and Drink</h2>
                  <p>
                    The main bars have lowered bar counters. The majority of
                    food and drink options will be available on hard-standing
                    ground, with a select few located on grass or gravel. We are
                    working hard to improve the accessibility to vendors for
                    2025 and will provide more detail in the coming months.
                  </p>

                  <p>
                    We aim to cater for a wide range of dietary requirements and
                    allergies and these should be clear on the individual
                    vendors' stalls. Free water points are located across the
                    festival.
                  </p>

                  <p>
                    If you have medical reasons for having your own food and/or
                    beverage on you, you are permitted to bring in only enough
                    food/beverages for your personal consumption. Please inform
                    security at the gate of this provision upon arrival and be
                    aware this may be subject to additional searches.
                  </p>
                </section>

                {/* Medical and Welfare Support */}
                <section>
                  <h2>Medical and Welfare Support</h2>
                  <p>
                    We have a dedicated medical team onsite, including trained
                    First Aiders, to assist with any medical needs. A welfare
                    area will also be available for anyone needing support
                    during the festival.
                  </p>

                  <p>
                    <strong>Medication storage:</strong> Medication can be
                    safely stored and refrigerated at the medical tent on-site
                    if required. Medications requiring injection must be stored
                    in the medical tent. Please remember that all medication
                    must be self-administered. Please inform us via the
                    Accessibility Application Form and we can help you with your
                    individual requirements.
                  </p>

                  <p>
                    Please bring any medication that you would normally take,
                    but no more than you would personally expect to take over
                    the duration of the Event. All medication must be clearly
                    labelled as prescribed and the name on the prescription
                    label must match that of the ticket holder.
                  </p>

                  <p>
                    For any emergencies, approach the nearest security personnel
                    or visit the medical tent. Trained medical staff are
                    available to assist you at all times.
                  </p>

                  <p>
                    There will be strobe lighting during some performances.
                    There is also likely to be pyrotechnics during some
                    performances.
                  </p>
                </section>

                {/* Deaf / hard of hearing attendees */}
                <section>
                  <h2>Deaf / hard of hearing attendees</h2>
                  <p>
                    We offer BSL interpretation for performances upon request.
                    To ensure interpreters are available, please request this
                    via the Accessibility Application Form at least three months
                    before the event. Our Accessibility Team will work to
                    accommodate your needs.
                  </p>

                  <p>
                    There will be a mobile hearing / induction loop at the
                    Accessible Entrance.
                  </p>
                </section>

                {/* Assistance Dogs */}
                <section>
                  <h2>Assistance Dogs</h2>
                  <p>We welcome Assistance Dogs at Bludfest.</p>

                  <p>
                    It is important to note that this is a large-scale event
                    with very busy and crowded areas into and out of the arena.
                    We ask that, in the interest of the safety of both your
                    animal and other guests, that only Assistance Dogs trained
                    to safely navigate this kind of environment are brought into
                    the show.
                  </p>

                  <p>
                    Please inform us if you are bringing your Assistance Dog on
                    the Accessibility Application Form. This will help ensure
                    smooth entry into the festival.
                  </p>

                  <p>
                    You will also have access to a free Essential Companion
                    ticket to assist with navigating the show - please let us
                    know if you require this on the Accessibility Application
                    Form.
                  </p>

                  <p>
                    There will be an area for toileting and hydration at the
                    Accessible Hub.
                  </p>
                </section>

                {/* Contact Us */}
                <section>
                  <h2>Contact Us</h2>
                  <p>
                    For any additional information or if you require the
                    Accessibility Application Form in an alternative format,
                    please contact us at{" "}
                    <Link href="mailto:accessibility@bludfest.org">
                      accessibility@bludfest.org
                    </Link>
                    .
                  </p>

                  <p>
                    We are dedicated to making Bludfest 2025 an unforgettable
                    experience for everyone and are continuously reviewing our
                    accessibility services to improve the festival for all.
                  </p>

                  <p>
                    Let's make it a safe, fun, and inclusive event for all our
                    attendees!
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;
