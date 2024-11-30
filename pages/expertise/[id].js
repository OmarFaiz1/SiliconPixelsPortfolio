import { useRouter } from "next/router";
import { expertise } from "@/assets/data/dummydata";
import dynamic from "next/dynamic";

const WebDesignDevelopment = dynamic(() =>
  import("@/components/expertise/WebDesignDevelopment")
);
const DigitalMarketing = dynamic(() =>
  import("@/components/expertise/WebDesignDevelopment")
);
const ECommerce = dynamic(() =>
  import("@/components/expertise/WebDesignDevelopment")
);
const BrandingCreativeServices = dynamic(() =>
  import("@/components/expertise/WebDesignDevelopment")
);

const ExpertiseDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const expertiseItem = expertise.find((item) => item.id === parseInt(id));

  if (!expertiseItem) {
    return (
      <div className="flex justify-center items-center h-screen text-lg text-gray-500">
        Expertise not found.
      </div>
    );
  }

  switch (expertiseItem.id) {
    case 1:
      return <WebDesignDevelopment expertiseItem={expertiseItem} />;
    case 2:
      return <WebDesignDevelopment expertiseItem={expertiseItem} />;
    case 3:
      return <WebDesignDevelopment expertiseItem={expertiseItem} />;
    case 4:
      return <WebDesignDevelopment expertiseItem={expertiseItem} />;
    default:
      return <div>Expertise not found.</div>;
  }
};

export default ExpertiseDetail;
