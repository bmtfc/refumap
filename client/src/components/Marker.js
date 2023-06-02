import EducationIcon from "../icons/Education";
import FoodAidIcon from "../icons/FoodAid";
import GovernmentBodiesIcon from "../icons/GovernmentBodies";
import IntegrationSupportOrganizationsIcon from "../icons/IntegrationSupportOrganizations";
import LegalServicesIcon from "../icons/LegalServices";
import LeisureIcon from "../icons/Leisure";
import MedicalAssistanceIcon from "../icons/MedicalAssistance";
import OralWrittenTranslationIcon from "../icons/OralWrittenTranslation";
import OtherIcon from "../icons/Other";
import PsychologicalAssistanceIcon from "../icons/PsychologicalAssistance";
import TransportationIcon from "../icons/Transportation";
import VolunteeringIcon from "../icons/Volunteering";

const Marker = ({
  setSidebarOpen,
  id,
  category,
  setSelectedMarker,
  selectedMarker,
}) => {
  const getIcon = () => {
    switch (category) {
      case "education":
        return <EducationIcon />;
      case "foodAid":
        return <FoodAidIcon />;
      case "governmentBodies":
        return <GovernmentBodiesIcon />;
      case "integrationSupportOrganizations":
        return <IntegrationSupportOrganizationsIcon />;
      case "legalServices":
        return <LegalServicesIcon />;
      case "leisure":
        return <LeisureIcon />;
      case "medicalAssistance":
        return <MedicalAssistanceIcon />;
      case "oralWrittenTranslation":
        return <OralWrittenTranslationIcon />;
      case "psychologicalAssistance":
        return <PsychologicalAssistanceIcon />;
      case "transportation":
        return <TransportationIcon />;
      case "volunteering":
        return <VolunteeringIcon />;
      case "other":
        return <OtherIcon />;
    }
  };

  const handleClick = () => {
    setSidebarOpen((prev) => {
      if (prev && selectedMarker?.id === id) {
        setSelectedMarker(null);
        return false;
      }
      // fetch marker data
      const markerData = {
        id,
        category,
        name: "test",
        time: "10:00-20:00",
        description: "test test test",
        address: "test address",
      };
      setSelectedMarker(markerData);
      return true;
    });
  };
  return (
    <div id={id} className="marker" onClick={handleClick}>
      {getIcon()}
    </div>
  );
};

export default Marker;
