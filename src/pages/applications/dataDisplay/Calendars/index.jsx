import ComponentPageContainer from "../../../../shared/components/ComponentPageContainer";
import BorderlessSideBySide from "./BorderlessSideBySide";
import BorderlessStacked from "./BorderlessStacked";
import DayView from "./DayView";
import Double from "./Double";
import MonthView from "./MonthView";
import SmallWithMeetings from "./SmallWithMeetings";
import WeekView from "./WeekView";
import YearView from "./YearView";

const Calendars = () => {
  return (
    <ComponentPageContainer
      pageTitle={"Calendars"}
      breadcrumb={"Application UI / Data Display"}
    >
      <SmallWithMeetings />
      <MonthView />
      <WeekView />
      <DayView />
      <YearView />
      <Double />
      <BorderlessStacked />
      <BorderlessSideBySide />
    </ComponentPageContainer>
  );
};

export default Calendars;
