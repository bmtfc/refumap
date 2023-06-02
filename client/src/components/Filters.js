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

const Filters = ({ setCategory, category }) => {
  const changeCategory = (e) => {
    const category = e.target.parentNode.id;
    setCategory((prev) => {
      if (prev === category) {
        return "all";
      }

      return category;
    });
  };

  return (
    <div
      className={`${
        category === "all" ? " filters filters-selected" : "filters"
      }`}
    >
      <EducationIcon
        id="education"
        onClick={changeCategory}
        className={`${category === "education" ? "category-selected" : ""}`}
      />
      <FoodAidIcon
        id="foodAid"
        onClick={changeCategory}
        className={`${category === "oodAid" ? "category-selected" : ""}`}
      />
      <GovernmentBodiesIcon
        id="governmentBodies"
        onClick={changeCategory}
        className={`${
          category === "governmentBodies" ? "category-selected" : ""
        }`}
      />
      <IntegrationSupportOrganizationsIcon
        id="integrationSupportOrganizations"
        onClick={changeCategory}
        className={`${
          category === "integrationSupportOrganizations"
            ? "category-selected"
            : ""
        }`}
      />
      <LegalServicesIcon
        id="legalServices"
        onClick={changeCategory}
        className={`${category === "legalServices" ? "category-selected" : ""}`}
      />
      <LeisureIcon
        id="leisure"
        onClick={changeCategory}
        className={`${category === "leisure" ? "category-selected" : ""}`}
      />
      <MedicalAssistanceIcon
        id="medicalAssistance"
        onClick={changeCategory}
        className={`${
          category === "medicalAssistance" ? "category-selected" : ""
        }`}
      />
      <OralWrittenTranslationIcon
        id="oralWrittenTranslation"
        onClick={changeCategory}
        className={`${
          category === "ralWrittenTranslation" ? "category-selected" : ""
        }`}
      />
      <PsychologicalAssistanceIcon
        id="psychologicalAssistance"
        onClick={changeCategory}
        className={`${
          category === "psychologicalAssistance" ? "category-selected" : ""
        }`}
      />
      <TransportationIcon
        id="transportation"
        onClick={changeCategory}
        className={`${
          category === "transportation" ? "category-selected" : ""
        }`}
      />
      <VolunteeringIcon
        id="volunteering"
        onClick={changeCategory}
        className={`${category === "volunteering" ? "category-selected" : ""}`}
      />
      <OtherIcon
        id="other"
        onClick={changeCategory}
        className={`${category === "other" ? "category-selected" : ""}`}
      />
    </div>
  );
};

export default Filters;
