import type { RouterOutputs } from "~/utils/api";

type Elevator = RouterOutputs["elevators"]["getAll"];  

function ProjectListItemRow({ elevators }: { elevators: Elevator }) {
  return (
    <>
      {elevators?.map((elevator, index) => (
        <tr key={index}>
          <th>1</th>
          <td>{elevator.no}</td>
          <td>{elevator.name}</td>
          <td>{`${elevator.capacity} kg`}</td>
        </tr>
      ))}
    </>
  );
}

export default ProjectListItemRow;
