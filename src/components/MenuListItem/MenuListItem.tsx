import { useNavigate } from "react-router-dom";
import { MenuListItemType } from "./MenuListItem.types";
import { getCorrectColorOfTemperature } from "./MenuListItem.helpers";

export const MenuListItem = ({
  name,
  available,
  targetTemperature,
  moduleId,
  actualTemperature,
}: MenuListItemType) => {
  let navigate = useNavigate();

  // const routeChange = () => {
  //   navigate(`/modules/${moduleId}`);
  // };

  return (
    <div
      className="bg-[#545850] w-80 h-40 flex flex-col justify-center items-center border border-[#252C29] rounded-xl font-semibold text-[#E5E1DC] active:bg-[#37423D] hover:bg-[#706E63]"
      // onClick={routeChange}
    >
      <p>{name}</p>
      <p>Is Available: {String(available)}</p>
      <p>Target Temperature: {targetTemperature}&#8451;</p>
      {actualTemperature && (
        <div
          className="flex flex-row justify-between"
          data-testid="actual-temperature-container"
        >
          <p className="">Actual temperature: </p>
          <p
            className={getCorrectColorOfTemperature(
              actualTemperature,
              targetTemperature,
            )}
          >
            <div className="w-4 flex items-center pl-2">
              {actualTemperature}&#8451;
            </div>
          </p>
        </div>
      )}
    </div>
  );
};
