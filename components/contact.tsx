import { useEffect, useRef, useState } from "react";
import {
  Input,
  Textarea,
  Checkbox,
  Link,
  useDisclosure,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Button from "@/components/button";
import { Close, Connect, Social } from "@/components/nav";
import codes from "@/public/data/CountryCodes.json";
import { useFormStatus } from "react-dom";
import Lottie from "lottie-react";
import { replaceColor } from "lottie-colorify";
import sentAnimation from "@/public/animations/sent.json";
import { motion } from "framer-motion";
import { submit } from "@/app/actions";
import { Privacy, Terms } from "@/components/modals";

const Contact = ({ fixed }: { fixed?: boolean }) => {
  const [sent, send] = useState<boolean>(false),
    [changeCode, setChangeCode] = useState(false),
    [code, setCode] = useState<string>("+33"),
    menuRef = useRef<HTMLDivElement>(null),
    { pending } = useFormStatus(),
    [privacy, setPrivacy] = useState(false),
    [terms, setTerms] = useState(false),
    { onOpenChange } = useDisclosure(),
    form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!changeCode) return;
      const key = e.key.toUpperCase(),
        match = codes.find((c) => c.name.toUpperCase().startsWith(key));
      if (match) {
        const i = codes.indexOf(match);
        if (menuRef.current) {
          const buttons = menuRef.current.querySelectorAll("button");
          if (buttons[i])
            buttons[i].scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    if (changeCode) window.addEventListener("keypress", handleKeyPress);

    return () => window.removeEventListener("keypress", handleKeyPress);
  }, [changeCode]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "name":
        e.target.value = e.target.value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, "");
        break;
      case "email":
        e.target.value = e.target.value.replace(/[^a-z0-9@._-]/g, "");
        break;
      case "tel":
        e.target.value = e.target.value.replace(/[^0-9]/g, "");
        break;
    }
  };

  return (
    <motion.section
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`${!fixed && "fixed lg:bottom-0 lg:top-auto top-0 left-0 z-30 overflow-y-auto"} bg-vitsippa-300 lg:h-[90vh] lg:min-h-[84vh] h-full lg:overflow-y-hidden w-full flex flex-col justify-start items-center lg:px-[2vw] px-[4vw] py-[6vh] md:pt-[8vh] md:pb-[8vh] lg:gap-[2vh] text-black`}
    >
      {!fixed && (
        <div
          className={
            "w-full flex justify-end items-center absolute top-[2vh] right-[4vw] md:right-[2vw]"
          }
        >
          <Close />
        </div>
      )}
      <div
        className={
          "w-full h-max md:my-auto flex flex-col md:flex-row justify-center md:justify-between items-center gap-[6vh] lg:gap-[4vh] md:px-[2vw]"
        }
      >
        <div
          className={
            "hidden md:flex flex-col w-[64vh] h-full justify-between items-start"
          }
        >
          <div
            className={
              "w-full flex flex-col justify-center items-start gap-[2vh]"
            }
          >
            <h2>Get in Touch</h2>
            <p className={"text-vitsippa-600"}>
              Feel free to contact us to explore how KG Aircraft Consulting can
              support your business aviation requirements.
            </p>
            <Connect />
          </div>
        </div>
        <div
          className={
            "md:hidden w-full flex flex-col justify-center items-start gap-[2vh]"
          }
        >
          <h2>Get in Touch</h2>
          <p className={"text-vitsippa-600"}>
            Feel free to contact us to explore how KG Aircraft Consulting can
            support your business aviation requirements.
          </p>
        </div>
        {sent ? (
          <div
            className={
              "containerize md:w-2/5 py-[2vh] flex flex-col justify-center items-center text-center bg-black/25 rounded-2xl gap-[2vh] scale-animation"
            }
          >
            <h3 className={"font-semibold"}>Your message is on the way!</h3>
            <div
              className={
                "size-[20vh] bg-white rounded-full p-[2vh] flex justify-center items-center"
              }
            >
              <Lottie
                className={"size-full"}
                autoplay={true}
                loop={true}
                animationData={replaceColor(
                  "#000000",
                  "#6C8254",
                  sentAnimation,
                )}
              />
            </div>
            <p>We&apos;ll get back to you ASAP</p>
          </div>
        ) : (
          <form
            ref={form}
            action={async (formData) =>
              await submit({ formData: formData, dialCode: code }).then(() =>
                send(true),
              )
            }
            className={
              "w-full h-full md:w-[56vh] flex flex-col justify-between items-center containerize md:px-[2vw] bg-white gap-[4vh] py-[2vh] md:py-[2vh] rounded-xl z-0"
            }
          >
            <Input
              label={"Name"}
              type={"text"}
              name={"name"}
              isDisabled={pending}
              isRequired
              variant={"underlined"}
              isClearable={true}
              required
              onInput={handleInput}
              classNames={{
                inputWrapper: [
                  "w-full",
                  "bg-transparent",
                  "hover:bg-transparent",
                  "rounded-none",
                  "p-0",
                ],
                input: ["w-full", "bg-transparent", "text-black", "text-base"],
                clearButton: ["text-black"],
                label: "uppercase text-vitsippa-500 text-sm",
              }}
            />
            <Input
              isRequired
              required
              label={"Email"}
              type={"email"}
              name={"email"}
              isDisabled={pending}
              variant={"underlined"}
              isClearable={true}
              onInput={handleInput}
              classNames={{
                inputWrapper: [
                  "w-full",
                  "bg-transparent",
                  "hover:bg-transparent",
                  "rounded-none",
                  "p-0",
                ],
                input: ["w-full", "bg-transparent", "text-black", "text-base"],
                clearButton: ["text-black"],
                label: "uppercase text-vitsippa-500 text-sm",
              }}
            />
            <Input
              label={"Phone"}
              type={"text"}
              name={"tel"}
              isDisabled={pending}
              variant={"underlined"}
              isClearable={true}
              onInput={handleInput}
              classNames={{
                inputWrapper: [
                  "w-full",
                  "bg-transparent",
                  "hover:bg-transparent",
                  "rounded-none",
                  "p-0",
                ],
                input: ["w-full", "bg-transparent", "text-black", "text-base"],
                clearButton: ["text-black"],
                label: "uppercase text-vitsippa-500 text-sm",
              }}
              startContent={
                <Dropdown placement={"top-start"}>
                  <DropdownTrigger>
                    <button
                      disabled={pending}
                      type={"button"}
                      onBlur={() => setTimeout(() => setChangeCode(false), 200)}
                      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                        e.preventDefault();
                        setTimeout(() => setChangeCode(!changeCode), 200);
                      }}
                      className={
                        "flex justify-start items-end gap-[0.5vw] text-vitsippa-500 font-bold text-base"
                      }
                    >
                      {code}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 72 72"
                        className={`fill-vitsippa-500 lg:size-[1vw] size-[2vh] ${changeCode ? "-rotate-180" : ""} transition-transform duration-200 ease-in-out translate-y-[0.15vh]`}
                      >
                        <path d="M35.98,50.002c-1.046,0-2.093-0.395-2.863-1.185L13.595,28.809c-1.542-1.581-1.512-4.114,0.069-5.656	c1.582-1.542,4.113-1.512,5.657,0.069L35.98,40.296l16.698-17.113c1.544-1.582,4.076-1.612,5.657-0.069s1.611,4.075,0.069,5.656	L38.844,48.817C38.073,49.607,37.026,50.002,35.98,50.002z"></path>
                      </svg>
                    </button>
                  </DropdownTrigger>
                  <DropdownMenu
                    classNames={{
                      base: "h-[18vh] overflow-y-auto",
                    }}
                  >
                    {codes.map((sel, i) => (
                      <DropdownItem
                        key={i}
                        onClick={() => {
                          setChangeCode(false);
                          setCode(sel.dial_code);
                        }}
                        classNames={{
                          title: "text-base",
                          description: "text-base",
                        }}
                        endContent={
                          <span className={"text-vitsippa-300"}>
                            {sel.name}
                          </span>
                        }
                      >
                        {sel.dial_code}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              }
            />
            <Textarea
              label={"Message"}
              name={"message"}
              isDisabled={pending}
              isRequired
              required
              variant={"underlined"}
              maxRows={3}
              onInput={handleInput}
              classNames={{
                inputWrapper: [
                  "w-full",
                  "bg-transparent",
                  "hover:bg-transparent",
                  "rounded-none",
                  "p-0",
                ],
                input: ["w-full", "bg-transparent", "text-black", "text-base"],
                label: "uppercase text-vitsippa-500 text-sm",
              }}
            />
            <div
              className={
                "w-full flex flex-col justify-start items-start gap-[4vh] lg:gap-[2vh]"
              }
            >
              <Checkbox
                isDisabled={pending}
                classNames={{
                  base: "w-full flex justify-start items-center",
                  label: "text-sm text-vitsippa-500",
                }}
              >
                Send me alerts and company updates
              </Checkbox>
              <Checkbox
                isRequired
                required
                isDisabled={pending}
                onInput={handleInput}
                classNames={{
                  base: "w-full flex justify-start items-center",
                  label: "text-sm text-vitsippa-500",
                }}
              >
                I agree to the{" "}
                <Link
                  className={"text-sm text-vitsippa-600 underline"}
                  onPress={() => setPrivacy(true)}
                >
                  privacy policy
                </Link>
                <Privacy
                  isOpen={privacy}
                  onClose={() => setPrivacy(false)}
                  onOpenChange={onOpenChange}
                />{" "}
                &{" "}
                <Link
                  className={"text-sm text-vitsippa-600 underline"}
                  onPress={(e) => setTerms(true)}
                >
                  terms and conditions
                </Link>
                <Terms
                  isOpen={terms}
                  onClose={() => setTerms(false)}
                  onOpenChange={onOpenChange}
                />
              </Checkbox>
            </div>
            <Button
              label={"Send"}
              isDisabled={pending}
              type={"submit"}
              variant={"solid"}
              dark
            />
          </form>
        )}
        <div
          className={
            "md:hidden w-full flex flex-col justify-center items-center gap-[6vh] lg:gap-[2vh]"
          }
        >
          <div className={"w-full h-[0.15vh] bg-black"} />
          <Social />
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
