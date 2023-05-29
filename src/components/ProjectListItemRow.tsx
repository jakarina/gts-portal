function ProjectListItemRow({ elevators }) {
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
