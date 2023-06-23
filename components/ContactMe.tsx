"use client";

import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

type Props = {
  pageInfo: PageInfo;
};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({ pageInfo }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    const id = toast.loading("Sending email...");

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_MAIL_SERVICE_ID!,
        process.env.NEXT_PUBLIC_MAIL_TEMPLATE_ID!,
        {
          from_name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_MAIL_KEY
      );

      if (response.status === 200) {
        toast.success("Email send.", {
          id: id,
        });
      }
    } catch (err) {
      toast.error("An error occured while sending the email.", {
        id: id,
      });
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col text-center md:text-left max-w-7xl mx-auto 
      px-10 justify-evenly items-center"
    >
      <h3
        className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-xl 
      md:text-2xl"
      >
        Contact
      </h3>

      <div className="flex flex-col space-y-7 mt-10">
        <h4 className="text-2xl md:text-4xl font-semibold text-center">
          I have just got what you need.{" "}
          <span className="underline decoration-[#F7AB0A]/50">Lets Talk.</span>
        </h4>

        <div className="space-y-4">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-5 w-5 md:h-6 md:w-6 animate-pulse flex-shrink-0" />
            <p className="md:text-xl">{pageInfo.phoneNumber}</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-5 w-5 md:h-6 md:w-6 animate-pulse flex-shrink-0" />
            <p className="md:text-xl">{pageInfo.email}</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-5 w-5 md:h-6 md:w-6 animate-pulse flex-shrink-0" />
            <p className="md:text-xl">{pageInfo.address}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-[18rem] sm:w-[25rem] md:w-fit mx-auto"
        >
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <input
              {...register("name", { required: true, maxLength: 30 })}
              placeholder="Name"
              className={`contactInput ${errors.name && "invalidInput"}`}
              type="text"
            />
            <input
              {...register("email", { required: true })}
              placeholder="Email"
              className={`contactInput ${errors.email && "invalidInput"}`}
              type="email"
            />
          </div>

          <input
            {...register("subject", { required: true })}
            placeholder="Subject"
            className={`contactInput ${errors.subject && "invalidInput"}`}
            type="text"
          />

          <textarea
            {...register("message", { required: true })}
            placeholder="Message"
            className={`contactInput ${errors.message && "invalidInput"}`}
          />

          <button
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default ContactMe;
