import Image from "next/image"



const client = [
  "/client/1.svg",
  "/client/2.svg",
  "/client/3.svg",
  "/client/4.svg",
  "/client/5.svg",
  "/client/6.svg",
  "/client/7.svg",
  "/client/8.svg",
  "/client/9.svg",
  "/client/10.svg",
  "/client/11.svg",
  "/client/12.svg",
  "/client/13.svg",
  "/client/14.svg",
]
const Client = () => {
  return (
    <div className="max-w-xl">
      <h2 className="text-4xl mt-6 font-bold">
      Millions run on Notion every day
      </h2>
      <p className="opacity-70 mt-2">
      Powering the world’s best teams,
      from next-generation startups to established enterprises.
      </p>
      <div className="flex justify-center items-center gap-6 flex-wrap mt-6">
        {client.map((cli,ser) => (
          <Image  key={ser} src={cli} width={50} height={50} alt="Client" />
        ))}
      </div>
    </div>
  )
}

export default Client
