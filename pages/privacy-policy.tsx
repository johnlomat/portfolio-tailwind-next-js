import type { NextPage } from "next";
import Link from "next/link";
import CustomHead from "../components/CustomHead";

const PrivacyPage: NextPage = () => {
  return (
    <div className="page-content">
      <CustomHead
        title="Privacy Policy | John Lomat"
        description="Read our privacy policy to understand how we handle your data and protect your privacy."
      />
    </div>
  );
};

export default PrivacyPage;
