import {
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import Button from "@/components/button";
import legal from "@/public/data/legal.json";

export const Privacy = ({
  isOpen,
  onClose,
  onOpenChange,
}: {
  isOpen?: boolean;
  onClose?: () => void;
  onOpenChange?: (isOpen: boolean) => void;
}) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    onOpenChange={onOpenChange}
    backdrop={"blur"}
  >
    <ModalContent className={"h-[64vh] overflow-y-auto"}>
      <>
        <ModalHeader>
          <h3 className={"font-semibold"}>Privacy Policy</h3>
        </ModalHeader>
        <ModalBody className={"modal-body"}>
          {legal.privacy.map((section, i) => (
            <div key={i} className={"modal-section"}>
              <h4 className={"font-medium"}>
                {i + 1}. {section.title}
              </h4>
              {section.content && (
                <p className={"text-justify"}>{section.content}</p>
              )}
              {i === legal.privacy.length - 1 && (
                <p className={"text-justify"}>
                  For any questions about this Privacy Policy or to exercise
                  your rights, please contact us at:
                  <Link href={"mailto:sales@kg-aircraft-consulting.com"}>
                    sales@kg-aircraft-consulting.com
                  </Link>
                </p>
              )}
            </div>
          ))}
        </ModalBody>
        <ModalFooter>
          <Button
            label={"Close"}
            color={"danger"}
            variant={"flat"}
            onPress={onClose}
          />
        </ModalFooter>
      </>
    </ModalContent>
  </Modal>
);

export const Terms = ({
  isOpen,
  onClose,
  onOpenChange,
}: {
  isOpen?: boolean;
  onClose?: () => void;
  onOpenChange?: (isOpen: boolean) => void;
}) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    onOpenChange={onOpenChange}
    backdrop={"blur"}
  >
    <ModalContent className={"h-[64vh] overflow-y-auto"}>
      <>
        <ModalHeader>
          <h3 className={"font-semibold"}>Terms of Use</h3>
        </ModalHeader>
        <ModalBody className={"modal-body"}>
          {legal.terms.map((section, i) => (
            <div key={i} className={"modal-section"}>
              <h4 className={"font-medium"}>
                {i + 1}. {section.title}
              </h4>
              {section.content && (
                <p className={"text-justify"}>{section.content}</p>
              )}
            </div>
          ))}
        </ModalBody>
        <ModalFooter>
          <Button
            label={"Close"}
            color={"danger"}
            variant={"flat"}
            onPress={onClose}
          />
        </ModalFooter>
      </>
    </ModalContent>
  </Modal>
);
