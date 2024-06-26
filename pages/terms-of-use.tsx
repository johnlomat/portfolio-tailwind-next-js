import type { NextPage } from "next";
import Link from "next/link";
import CustomHead from "../components/CustomHead";

const TermsPage: NextPage = () => {
  return (
    <div className="page-content">
      <CustomHead
        title="Terms of Use | John Lomat"
        description="Read our Terms of Use to understand the rules and regulations for using our website."
      />
    </div>
  );
};

export default TermsPage;
