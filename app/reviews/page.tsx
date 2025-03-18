import { getAllCategories, getReviews } from "@/lib/wordpress";
import { Section, Container, Prose } from "@/components/craft";
import { Metadata } from "next";
import BackButton from "@/components/back";
import Link from "next/link";

export const metadata: Metadata = {
	title: "All Categories",
	description: "Browse all categories of our blog posts",
	alternates: {
		canonical: "/reviews",
	},
};

export default async function Page() {
	const reviews = await getReviews();

	return (
		<Section>
			<Container className="space-y-6">
				<Prose className="mb-8">
					<h2>All Categories</h2>
					<ul className="grid">
						{reviews.map((review: any) => (
							<li key={review.id}>
								<Link href={`/reviews/${review.slug}`}>
									ss
								</Link>
							</li>
						))}
					</ul>
				</Prose>
				<BackButton />
			</Container>
		</Section>
	);
}
