// pages/reviews.js
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";

export default function ReviewsPage() {
  const { data: session } = useSession();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (session?.accessToken) {
      fetch("/api/reviews")
        .then((res) => res.json())
        .then((data) => setReviews(data.reviews || []));
    }
  }, [session]);

  if (!session) return <button onClick={() => signIn()}>Sign in with Google</button>;

  return (
    <div className="p-4">
      <button onClick={() => signOut()}>Sign out</button>
      <h1 className="text-2xl font-bold mb-4">Google Reviews</h1>
      <ul className="space-y-4">
        {reviews.map((review, idx) => (
          <li key={idx} className="border p-4 rounded-md">
            <p><strong>{review.reviewer.displayName}</strong> ⭐ {review.starRating}</p>
            <p>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
