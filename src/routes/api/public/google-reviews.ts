import { createFileRoute } from "@tanstack/react-router";

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
}

const FALLBACK_REVIEWS: GoogleReview[] = [
  {
    author_name: "Priya Kadam",
    rating: 5,
    text: "Absolutely loved the bridal set I purchased for my wedding. The craftsmanship is exquisite and the staff made the entire experience memorable. A true legacy jeweller of Ratnagiri!",
    relative_time_description: "2 weeks ago",
  },
  {
    author_name: "Rohit Patil",
    rating: 5,
    text: "Fourth generation trust is real. Transparent pricing, BIS hallmarking and timeless designs. My go-to place for all gold jewellery in Ratnagiri.",
    relative_time_description: "1 month ago",
  },
  {
    author_name: "Anjali Mestry",
    rating: 5,
    text: "The antique temple necklace collection is stunning. They helped me customise a piece exactly how I wanted it. Highly recommended for wedding shopping.",
    relative_time_description: "2 months ago",
  },
  {
    author_name: "Sachin Rane",
    rating: 5,
    text: "Bought engagement rings here. Beautiful work, transparent billing and lovely hospitality. Highly recommended.",
    relative_time_description: "4 months ago",
  },
];

export const Route = createFileRoute("/api/public/google-reviews")({
  server: {
    handlers: {
      GET: async () => {
        return Response.json({ reviews: FALLBACK_REVIEWS }, {
          headers: {
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
