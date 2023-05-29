import ProjectListItemRow from "./ProjectListItemRow";


function ProjectListView({elevators}) {
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
          <ProjectListItemRow elevators={elevators}/>
        </tbody>
      </table>
    </div>
  );
}

export default ProjectListView;
