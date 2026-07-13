import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

import { getWritingMdxComponents } from "./writing-mdx-components";

interface WritingMdxBodyProps {
  body: string;
}

function WritingMdxBody({ body }: WritingMdxBodyProps) {
  return (
    <div className="space-y-8">
      <MDXRemote
        source={body}
        components={getWritingMdxComponents()}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        }}
      />
    </div>
  );
}

export { WritingMdxBody };
