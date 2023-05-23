type theme = 'material' | 'slant'
interface TemplateOptions {
  theme?: theme,
  accentColors: string[],
  backgroundColor?: string,
  school?: {
    name: string,
    major: string,
  },
  studentName?: string,
}
function PostTemplate(props: TemplateOptions) {
  return (
    <div className={`w-[50vh] h-[50vh] items-center justify-center flex flex-col shrink-0`} style={{ backgroundColor: `${props.backgroundColor || props.accentColors[0]}` }}>
      <h1 id="template-student-name" className="text-4xl">your name</h1>
      <h2 id="template-college-name" className="text-3xl">your school</h2>
      <h3 id="template-college-major" className="text-2xl"> your major</h3>
    </div>
  )
}
export default PostTemplate;