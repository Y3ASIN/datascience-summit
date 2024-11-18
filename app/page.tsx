import FeatureCard from "@/components/FeatureCard";
// import GuestCard from "@/components/GuestCard";
import HeroSection from "@/components/Hero";
import Location from "@/components/Location";
import MediaPartners from "@/components/MediaPartners";
import Organizers from "@/components/Organizers";
import Partners from "@/components/Partners";
import Instruction from "@/components/RegistrationInstruction";
import ScheduleCard from "@/components/ScheduleCard";
import SmallDes from "@/components/SmallDes";
import SummitGallery from "@/components/SummitGallery";
import TitleBar from "@/components/Titlebar";

// later import "guests"
import { events, featureData } from "@/constants";

export default function Home() {
  return (
    <section className="min-h-dvh w-full space-y-5">
      <section id="hero">
        <HeroSection backgroundImage="/backpic.jpg" />
      </section>

      <section className="group">
        <TitleBar title="Events" />
        <SmallDes />

        <div className="mx-auto flex w-full flex-wrap items-center justify-center gap-8 bg-background p-8 sm:max-w-7xl">
          {featureData.map((feature, index) => (
            <FeatureCard feature={feature} key={index} />
          ))}
        </div>
      </section>

      {/* <CardContainer>
        {featureData.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            date={feature.date}
            location={feature.location}
            tags={feature.tags}
            gradientFrom={feature.gradientFrom}
            gradientTo={feature.gradientTo}
          />
        ))}
      </CardContainer> */}

      {/* About Page */}
      <section
        id="about"
        className="mx-1 mt-10 w-full p-5 sm:mx-auto sm:max-w-7xl sm:p-20"
      >
        <TitleBar title="About" />

        <p className="text-start">
          The world is becoming increasingly data-driven, and Daffodil
          International University&#39;s Department of Software Engineering
          hopes to help pave the way for a smart, data-driven Bangladesh. To
          achieve this goal, we host an annual Data Science Summit at which we
          invite thought leaders and industry experts from a wide range of
          disciplines to participate in stimulating discussions and exchange
          novel viewpoints.
        </p>

        {/* Guest Lists */}
        {/* <TitleBar title="Our Honorable Guests" subText="text-2xl" />

        <div className="flex flex-wrap justify-center gap-6 rounded-lg bg-gray-100 p-8 shadow-lg">

          {guests.map((guest, index) => (
            <GuestCard key={index} guest={guest} isFirst={index === 0} />
          ))}
        </div> 
        */}

        <div>
          <TitleBar
            title="Get Set to Compete, Learn, and Win Big!"
            subText="text-3xl"
          />
          <Instruction />
        </div>
      </section>

      {/* Schedule Page */}

      <section
        id="schedule"
        className="mx-8 mt-10 flex min-h-screen max-w-full flex-col items-center justify-center gap-4 rounded-sm bg-gray-100 p-4 sm:mx-auto sm:max-w-7xl sm:flex-row sm:flex-wrap sm:px-8"
      >
        <TitleBar title="Schedule" />

        {events.map((event) => (
          <ScheduleCard key={event.id} event={event} />
        ))}
      </section>

      <section
        id="previous-summits"
        className="mx-8 mt-10 min-h-screen max-w-96 sm:mx-auto sm:max-w-7xl"
      >
        <SummitGallery />
      </section>

      <section className="group my-6 mb-4 bg-slate-100 py-6">
        <TitleBar title="Venue" subText="text-5xl" />
        <Location />
      </section>

      <section className="group">
        <TitleBar title="Organizers" subText="text-3xl" />
        <Organizers />
      </section>

      <section className="group">
        <TitleBar title="Partner" subText="text-3xl" />
        <Partners />
      </section>
      <section className="group">
        <TitleBar title="Media Partners" subText="text-3xl" />
        <MediaPartners />
      </section>
    </section>
  );
}
