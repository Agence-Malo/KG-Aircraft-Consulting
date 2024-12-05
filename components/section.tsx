export const Paragraph = ({
  title,
  content,
  classNames,
}: {
  title: string;
  content: string;
  classNames?: {
    div?: string;
    h2?: string;
    p?: string;
  };
}) => (
  <div
    className={`w-full flex flex-col justify-center items-start gap-[2vh] ${classNames?.div}`}
  >
    <h2 className={classNames?.h2}>{title}</h2>
    <p className={`text-vitsippa-500 whitespace-pre-wrap ${classNames?.p}`}>
      {content}
    </p>
  </div>
);

export const Divider = () => (
  <div className={"w-full h-[0.15vh] bg-vitsippa-200"} />
);

const Section = ({
  title,
  classNames,
  children,
}: {
  title: string;
  classNames?: {
    section?: string;
    div?: string;
    title?: string;
  };
  children?: React.ReactNode;
}) => (
  <section
    className={`containerize flex flex-col justify-center items-baseline py-[4vw] mb-[4vw] ${classNames?.section}`}
  >
    <div
      className={`w-full flex justify-start items-baseline border-b-[0.15vh] border-vitsippa-600 py-[2vh] mb-[4vw] whitespace-break-spaces ${classNames?.div}`}
    >
      <h2 className={classNames?.title}>{title}</h2>
    </div>
    {children}
  </section>
);

export default Section;
