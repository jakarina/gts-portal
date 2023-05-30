import type { RouterOutputs } from "~/utils/api";
import {
  Card,
  Title,
  Text,
  Flex,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  Badge,
  Button,
  Color,
} from "@tremor/react";

type Elevator = RouterOutputs["elevators"]["getAll"];

function ProjectListView({ elevators }: { elevators: Elevator}) {
  return (
    // <div className="overflow-x-auto">
    //   <table className="table-zebra table w-full">
    //     {/* head */}
    //     <thead>
    //       <tr>
    //         <th></th>
    //         <th>Tesisat No</th>
    //         <th>Tesisat Adı</th>
    //         <th>Kapasite</th>
    //         <th>Müşteri</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       <ProjectListelevatorRow elevators={elevators} />
    //     </tbody>
    //   </table>
    // </div>
    <Card>
      <Flex justifyContent="start" className="space-x-2">
        <Title>Tesisat Listesi</Title>
        <Badge color="gray">{elevators.length}</Badge>
      </Flex>
      <Text className="mt-2">Tesisatlar ve Teknik Özellikler</Text>

      <Table className="mt-6">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Tesisat No</TableHeaderCell>
            <TableHeaderCell>Tesisat Adı</TableHeaderCell>
            <TableHeaderCell>Kapasite</TableHeaderCell>
            <TableHeaderCell>Müşteri</TableHeaderCell>
            <TableHeaderCell className="text-right">Amount</TableHeaderCell>
            <TableHeaderCell>Link</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {elevators?.map((elevator) => (
            <TableRow key={elevator.id}>
              <TableCell>{elevator.no}</TableCell>
              <TableCell>{elevator.name}</TableCell>
              <TableCell>{elevator.capacity}</TableCell>
              <TableCell>
                <Button size="xs" variant="secondary" color="gray">
                  See details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}

export default ProjectListView;
