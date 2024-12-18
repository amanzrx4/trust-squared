import TrustAccount from "@/components/TrustAccount";
import { useGetMemberTrusters } from "@/hooks/queries/useGetMember";
import { formatFlow, getAddressLink, truncateAddress } from "@/utils";
import { ExternalLink } from "lucide-react";
import Blockies from "react-blockies";
import { CiLocationArrow1, CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useAccount } from "wagmi";

export const stats = {
  score: {
    icon: <CiUser className="h-8 w-auto" />,
    label: "Score",
    value: 1,
  },
  netFlow: {
    icon: <CiLocationArrow1 className="h-8 w-auto" />,
    label: "Net Flow",
    value: 1,
  },
  supporters: {
    icon: <CiUser className="h-8 w-auto" />,
    label: "Supporters",
    value: 1,
  },

  trustees: {
    icon: <CiLocationArrow1 className="h-8 w-auto" />,
    label: "Trustees",
    value: 1,
  },
};

export function Stat({
  label,
  value,
  icon,
}: (typeof stats)[keyof typeof stats]) {
  return (
    <div className="flex items-center gap-1 flex-col flex-wrap">
      {icon}
      <label>{label}</label>
      <p className="text-xl font-bold text-amber-500">{value}</p>
    </div>
  );
}

export default function Trusters() {
  const { address } = useAccount();
  // const [timePeriod] = useState<"day" | "week" | "month" | "year">("day");
  // const delegations = [
  //   { address: "0x123...456", name: "Alice", amount: "100 G$" },
  //   { address: "0x789...012", name: "Bob", amount: "50 G$" },
  // ];

  const { data, status } = useGetMemberTrusters(address ?? "");

  const totalSupporters = data?.data?.member?.trusters.length;
  const totalFlow = data?.data?.member?.trusters.reduce(
    (acc, curr) => acc + Number(curr.flowRate),
    0
  );

  return (
    <div className="px-4">
      <div className="py-2">
        <TrustAccount address={address || ""} />

        <div className="py-4 flex flex-col gap-4 items-center justify-between">
          <div className="flex items-end gap-4">
            <CiUser className="h-8 w-auto" />
            <div className="font-lg ">{"Total Supporters"}</div>
            <div className="text-xl text-[#36B82A]">
              {totalSupporters ? totalSupporters : "0"}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <CiLocationArrow1 className="h-8 w-auto" />
            <div className="font-lg ">{"Total Inflow"}</div>
            <div className="text-xl text-[#36B82A]">
              {totalFlow ? formatFlow(totalFlow.toString()) : "0"}
            </div>
          </div>
        </div>
      </div>

      {/* Headers */}
      <div className="flex justify-between py-4 font-semibold text-gray-600">
        <div>Address</div>
        <div>Amount Trusted</div>
      </div>

      {/* List */}
      <div className="space-y-4">
        {data?.data?.member?.trusters.map((t) => {
          const account = t.id.split("_")[0]
          return (
          <div key={t.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Blockies
                seed={account.toLowerCase()}
                size={8}
                scale={4}
                className="rounded-full"
              />
              <div>
                {/* <div className="font-medium">{trustee.name}</div> */}
                <div className="text-sm text-gray-500">
                  <Link
                    to={getAddressLink(account)}
                    className="font-medium text-lg underline flex gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {truncateAddress(account)} <ExternalLink color="black" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="font-medium">
              {formatFlow(t.flowRate.toString())}
            </div>
          </div>
        )})}
      </div>
    </div>
  );
}
