import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { GoHistory } from "react-icons/go";
import TimerStore from "../utils/timer-store";

interface ModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: () => void;
  // timerStores: TimerStore[];
}

export default function HistoryModal(props: ModalProps): JSX.Element {
  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={props.onOpen}
        className="bg-transparent bg-gray-800 bg-opacity-50 p-2 rounded-full"
      >
        <GoHistory size={48} />
      </button>
      <Modal
        isOpen={props.isOpen}
        onOpenChange={props.onOpenChange}
        scrollBehavior={"inside"}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Timer History
              </ModalHeader>
              {/* <ModalBody>
                {props.timerStores.map((item) => {
                  return (
                    <Card className="max-w-[400px]">
                      <CardHeader className="flex gap-3">
                        <div className="flex flex-col">
                          <p className="text-md">{item.getTitle()}</p>
                          <p className="text-small text-default-500">
                            {item.getTime()} minutes
                          </p>
                        </div>
                      </CardHeader>
                      <Divider />
                      <CardBody>
                        {item.getPauses().map((value) => {
                          return <p>{value}</p>;
                        })}
                      </CardBody>
                      <Divider />
                    </Card>
                  );
                })}
              </ModalBody> */}
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
