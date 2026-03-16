import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/validations/schema";
import axios from "axios";
import { Flip, toast, ToastContainer, Zoom } from "react-toastify";
import { apiRegister, mainApi } from "../api/mainApi";

function RegisterFrom() {
  const { formState, register, handleSubmit, reset } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onSubmit",
    defaultValues: {
      firstName: "",
      lastName: "",
      identity: "",
      password: "",
      confirmPassword: "",
    },
  });
  const { errors, isSubmitting } = formState;

  const onSubmit = async (data) => {
    try {
      await new Promise((reslove) => setTimeout(reslove, 1000));
      // const resp = await axios.post("http://localhost:8899/api/auth/register",data);
      // const resp = await apiRegister(data);
      const resp = await mainApi.post("/auth/register",data)
      document.getElementById("register-form").close();
      toast.success(resp.data.message, { transition: Zoom, autoClose: 4000 });
      reset();
    } catch (err) {
      console.dir(err);
      const errMsg = err.response?.data.message || err.message;
      // alert(JSON.stringify(err, null, 2));
      toast.error(errMsg, {
        transition: Flip,
        autoClose: 3000,
        containerId: "register-modal",
        position: "top-center",
      });
    }
  };

  return (
    <>
      <ToastContainer containerId="register-modal" />
      <div className="text-3xl text-center opacity-70">
        Create a new account
        {isSubmitting && (
          <span className="loading loading-spinner text-info mw-2"></span>
        )}
      </div>
      <div className="divider opacity-60"></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset
          className="flex flex-col gap-5 p-4 pt-3"
          disabled={isSubmitting}
        >
          <div className="flex gap-2">
            <div className="w-full">
              <input
                type="text"
                {...register("firstName")}
                placeholder="First name"
                className="input input-bordered w-full"
              />
              <p className="text-sm text-error">{errors.firstName?.message}</p>
            </div>
            <div className="w-full">
              <input
                type="text"
                {...register("lastName")}
                placeholder="Last name"
                className="input input-bordered w-full"
              />
              <p className="text-sm text-error">{errors.lastName?.message}</p>
            </div>
          </div>
          <div className="w-full">
            <input
              type="text"
              {...register("identity")}
              placeholder="Email or Phone number"
              className="input input-bordered w-full"
            />
            <p className="text-sm text-error">{errors.identity?.message}</p>
          </div>
          <div className="w-full">
            <input
              type="password"
              {...register("password")}
              placeholder="New password"
              className="input input-bordered w-full"
            />
            <p className="text-sm text-error">{errors.password?.message}</p>
          </div>
          <div className="w-full">
            <input
              type="password"
              {...register("confirmPassword")}
              placeholder="Confirm password"
              className="input input-bordered w-full"
            />
            <p className="text-sm text-error">
              {errors.confirmPassword?.message}
            </p>
          </div>
          <button
            className="btn btn-secondary text-xl text-white"
            disabled={isSubmitting}
          >
            Sign up
          </button>
          <button
            onClick={() => reset()}
            className="btn btn-error text-xl text-white"
          >
            Clear
          </button>
        </fieldset>
      </form>

      {/* <div className="border">
        <pre className="text-error text-xs">
          {JSON.stringify(errors, (k, v) => (k === "ref" ? undefined : v), 2)}
        </pre>
      </div> */}
    </>
  );
}

export default RegisterFrom;
