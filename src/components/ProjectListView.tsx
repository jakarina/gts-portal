import type { Elevator } from "@prisma/client";
import ProjectListItemRow from "./ProjectListItemRow";

type Props = {
  elevators: Elevator;
};

function ProjectListView({ elevators }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="table-zebra table w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Tesisat No</th>
            <th>Tesisat Adı</th>
            <th>Kapasite</th>
            <th>Müşteri</th>
          </tr>
        </thead>
        <tbody>
          <ProjectListItemRow elevators={elevators} />
        </tbody>
      </table>
    </div>
  );
}

export default ProjectListView;
