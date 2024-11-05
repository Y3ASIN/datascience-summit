import FeatureCard from "@/components/FeatureCard";
import GuestCard from "@/components/GuestCard";
import HeroSection from "@/components/Hero";
import Instruction from "@/components/RegistrationInstruction";
import ScheduleCard from "@/components/ScheduleCard";
import SummitGallery from "@/components/SummitGallery";
import TitleBar from "@/components/Titlebar";
import { events, featureData, guests } from "@/constants";

export default function Home() {
  return (
    <section className="min-h-dvh w-full space-y-5">
      <HeroSection backgroundImage="/backpic.jpg" />

      <TitleBar title="Events" />

      <div className="flex flex-wrap justify-center gap-8 bg-background p-8">
        {featureData.map((feature, index) => (
          <FeatureCard feature={feature} key={index} />
        ))}
      </div>

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
        className="mp-20 mx-6 mt-10 min-h-screen max-w-96 sm:mx-auto sm:max-w-7xl"
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

        <TitleBar title="Our Honorable Guests" subText="text-2xl" />

        <div className="flex flex-wrap justify-center gap-6 rounded-lg bg-gray-100 p-8 shadow-lg">
          {/* Guest Lists */}
          {guests.map((guest, index) => (
            <GuestCard key={index} guest={guest} isFirst={index === 0} />
          ))}
        </div>

        <div className="p-5">
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
        {/* <h1 className="mb-6 w-full text-center text-2xl font-bold sm:text-left">
        Schedule
      </h1> */}
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
    </section>
  );
}
