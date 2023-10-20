import ClassesCard from "./ClassesCard";

const ClassGrid = () => {
  return (
    <div className="flex flex-col lg:grid grid-cols-4 grid-rows-2 gap-6 px-28 py-20 w-full h-full lg:h-[50rem]">
      <ClassesCard
        item={0}
        className="calisthenics"
        timings="Monday, Wednesday, Friday : 10:00 AM - 1:00 PM"
        src="/assets/calisthenics.jpg"
      />
      <ClassesCard
        item={1}
        className="Yoga"
        timings="Tuesday, Thursday : 8:00 AM - 10:00 AM"
        src="/assets/yoga.jpg"
      />
      <ClassesCard
        item={2}
        className="Fitness"
        timings="Weekdays : 4:00 PM - 8:30 PM"
        src="/assets/fitness.jpg"
      />
      <ClassesCard
        item={3}
        className="Arm wrestling"
        timings="Monday, Friday : 6:00 PM - 9:00 PM"
        src="/assets/armwrestle.jpg"
      />
      <ClassesCard
        item={4}
        className="Cycling"
        timings="Tuesday, Thursday : 9:00 AM - 9:00 PM"
        src="/assets/cycling.jpg"
      />
      <ClassesCard
        item={5}
        className="Powerlifting"
        timings="Weekdays : 9:00 AM - 8:00 PM"
        src="/assets/powerlifting.jpg"
      />
    </div>
  );
};

export default ClassGrid;
