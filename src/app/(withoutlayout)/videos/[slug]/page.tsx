import Videos from "@/components/Main/Videos/Videos";

const VideosPage = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <Videos slug={params.slug} />
    </div>
  );
};

export default VideosPage;
