"use client";

import { Button, Input, Textarea } from "@nextui-org/react";
import { submit } from "@/app/actions";

const Form = () => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "name":
        e.target.value = e.target.value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, "");
        break;
      case "email":
        e.target.value = e.target.value.replace(/[^a-z0-9@._-]/g, "");
        break;
    }
  };

  return (
    <section
      className={
        "containerize lg:px-[12vw] bg-about-hero bg-fixed bg-cover bg-bottom flex flex-col lg:flex-row justify-center items-center py-[8vh] gap-[4vh] lg:gap-[4vw]"
      }
    >
      <div
        className={
          "flex flex-col justify-center items-start text-white gap-[2vh] lg:w-1/2"
        }
      >
        <h4>&mdash; Get in touch</h4>
        <h2>
          To start a conversation about how JetHouse can serve your business
          aviation needs, please reach out to us
        </h2>
      </div>
      <form
        action={async (formData) =>
          await submit({ formData: formData, dialCode: "" })
        }
        className={
          "w-full lg:w-1/2 flex flex-col justify-center items-center gap-[2vh]"
        }
      >
        <Input
          onInput={handleInput}
          type={"text"}
          label={"Name"}
          isRequired={true}
          name={"name"}
          className={"w-full"}
        />
        <Input
          onInput={handleInput}
          type={"email"}
          name={"email"}
          isRequired={true}
          className={"w-full"}
          label={"Email"}
        />
        <Textarea
          className={"w-full"}
          name={"message"}
          isRequired={true}
          label={"Message"}
        />
        <Button className={"w-full rounded-full bg-white"} type={"submit"}>
          <p>Send Message</p>
        </Button>
      </form>
    </section>
  );
};

export default Form;
