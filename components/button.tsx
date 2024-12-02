"use client";

import { Button as NextUIButton } from "@nextui-org/react";
import { PressEvent } from "@react-types/shared";

const Button = ({
  label,
  type,
  onPress,
  isDisabled,
  className,
  color,
  variant,
  dark,
}: {
  label: string | { default: string; compact: string };
  type?: "button" | "submit" | "reset";
  onPress?: (e: PressEvent) => void;
  isDisabled?: boolean;
  className?: string;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  variant:
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost";
  dark?: boolean;
}) => (
  <NextUIButton
    onPress={onPress}
    disabled={isDisabled}
    color={color}
    type={type}
    variant={variant}
    radius={"full"}
    className={`${!color && `bg-vitsippa-300/75 ${dark ? "text-black" : "text-white"}`} backdrop-blur-sm h-max px-[2vw] py-[0.75vh] cursor-pointer ${className}`}
    endContent={
      !color && (
        <div
          className={`size-[0.5rem] ${dark ? "bg-black" : "bg-white"} rounded-full`}
        />
      )
    }
  >
    {typeof label === "string" ? (
      label
    ) : (
      <>
        <span className={"hidden lg:block"}>{label.default}</span>
        <span className={"lg:hidden"}>{label.compact}</span>
      </>
    )}
  </NextUIButton>
);

export default Button;
