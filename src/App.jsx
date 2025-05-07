import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function App() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md py-4 px-8 flex justify-center gap-10 z-50">
        {[
          ["Intro", "intro"],
          ["Methodology", "methodology"],
          ["Showcase", "showcase"],
          ["Experience", "experience"],
        ].map(([label, id], i) => (
          <Link
            key={i}
            to={id}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-indigo-600 font-semibold text-gray-800"
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Main Content */}
      <div className="text-gray-800 font-sans pt-24">
        {/* Intro Section */}
        <motion.section
          id="intro"
          className="w-full min-h-screen bg-white px-8 py-20 flex flex-col items-center justify-center text-center gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Title */}
          <motion.h1
            className="text-7xl sm:text-9xl font-bold text-indigo-600 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            3DPix
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-2xl text-indigo-600 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Printable 3D Voxel Art
          </motion.p>

          {/* Research Statement */}
          <motion.p
            className="text-base text-gray-500 max-w-md mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            This research explores generative methods for translating 2D inputs
            into 3D voxelized forms, enabling spatial control and
            high-resolution reconstruction.
          </motion.p>

          {/* Instructor Info */}
          <motion.p
            className="text-sm text-gray-400 max-w-md mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            Instructor: Jose Luis Garcia del Castillo Lopez
            <br />
            April – May 2025 · Harvard University Graduate School of Design
          </motion.p>

          {/* Video Box (reduced height) */}
          <motion.div
            className="w-[90%] h-[90vh] border-2 border-gray-200 rounded-lg bg-gray-100 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 2 }}
          >
            <video
              src="/gif.mp4"
              className="w-full h-full object-cover rounded-lg"
              autoPlay
              loop
              muted
              playsInline
            />
          </motion.div>
        </motion.section>

        {/* Research Question */}
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-indigo-700 mb-2 justify-center">
            Research Question
          </h2>
          <p className="text-base text-gray-800 leading-relaxed">
            How can 2D images be transformed into editable 3D voxel models with
            spatial control and creative flexibility?
          </p>
        </motion.div>

        {/* Image Grid with Descriptions */}
        <motion.div
          className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 pt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full flex justify-center mb-4">
              <div className="w-full aspect-[1/1] scale-[.6] border border-gray-200 rounded-lg overflow-hidden">
                <img
                  src="/card1.jpg"
                  alt="Voxel Example"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-base text-indigo-600 font-semibold mb-2">
              1. Minimal Control in Existing Voxel Generators
            </p>
            <p className="text-sm text-gray-600 px-2">
              Current voxel tools offer limited parameters, often producing
              fixed results with minimal user intervention. Our system allows
              real-time adjustments of resolution, voxel size, and depth
              mapping—turning passive image conversion into an active design
              process.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full flex justify-center mb-4">
              <div className="w-full aspect-[1/1] scale-[.6] border border-gray-200 rounded-lg overflow-hidden">
                <img
                  src="/card2.jpg"
                  alt="Voxel Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-base text-indigo-600 font-semibold mb-2">
              2. Disjointed Path from Creation to Fabrication
            </p>
            <p className="text-sm text-gray-600 px-2">
              Translating voxel art into 3D-printable objects typically requires
              external software and manual formatting. Our tool streamlines this
              pipeline by generating fabrication-ready voxel models in a single
              interface, removing unnecessary technical barriers.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full flex justify-center mb-4">
              <div className="w-full aspect-[1/1] scale-[.6] border border-gray-200 rounded-lg overflow-hidden">
                <img
                  src="/card3.jpg"
                  alt="Voxel Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-base text-indigo-600 font-semibold mb-2">
              3. Missing Creative Transformation from 2D to 3D Voxel
            </p>
            <p className="text-sm text-gray-600 px-2">
              Most workflows treat 2D-to-3D as a neutral data conversion, losing
              the potential for expressive form-making. We introduce interactive
              controls—depth scaling, color-based filtering, and inversion—to
              transform flat visuals into customizable, spatially rich 3D voxel
              structures.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full flex justify-center mb-4">
              <div className="w-full aspect-[1/1] scale-[.6] border border-gray-200 rounded-lg overflow-hidden">
                <img
                  src="/voxel.jpg"
                  alt="Voxel Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-base text-indigo-600 font-semibold mb-2">
              4. Lack of Structured Image-to-Voxel Creation
            </p>
            <p className="text-sm text-gray-600 px-2">
              Many tools generate surface meshes or reliefs from 2D images, but
              few create true volumetric voxel forms. Our method produces solid,
              structured voxel grids—ready for design iteration and 3D
              printing—making the image-to-structure logic fully spatial.
            </p>
          </div>
        </motion.div>

        {/* Methodology Section */}
        <motion.section
          id="methodology"
          className="w-[90%] mx-auto py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-3xl font-semibold text-indigo-700 mb-10 text-center"
          >
            Methodology
          </motion.h2>

          {/* Technical Workflow Illustration */}
          <div className="w-full max-w-[1200px] mx-auto mb-16 flex flex-col items-center justify-center">
            <img
              src="/tech.jpg"
              alt="Technical Workflow"
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <p className="text-lg text-indigo-700 font-medium text-center">
              Image-to-Print Pipeline
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                title: "Step 1: Image Upload and Optimization",
                desc: "We begin by uploading a 2D image. We use Random Reduction to lower voxel density and Voxel Size to adjust resolution. By clicking Clear Background, we automatically remove the most common background color.",
                video: "/step1.mp4",
                reverse: false,
              },
              {
                title: "Step 2: Depth Transformation",
                desc: "We control vertical extrusion using Depth Scale and toggle Invert Depth to reverse depth direction. Fill Extruded Voxels generates closed geometry by extruding voxels from the center point. We click Recalculate Depths to regenerate voxel heights using selected Depth Modes like Brightness, Hue, or RGB channels.",
                video: "/step2.mp4",
                reverse: true,
              },
              {
                title: "Step 3: Color-Based Depth Mapping",
                desc: "We estimate depth through image processing techniques that analyze RGB and HSV color channels. Each Depth Mode reflects how different color dimensions influence perceived depth.",
                video: "/step3.mp4",
                reverse: false,
              },
              {
                title: "Step 4: Voxel Selection and Editing",
                desc: "We click on a voxel to select others with similar colors. By adjusting the Selection Threshold, we control the range of selected voxels. We can apply a new color palette, delete voxels, or manage edits using Undo and Redo.",
                video: "/step4.mp4",
                reverse: true,
              },
              {
                title: "Step 5: Export",
                desc: "Finally, we export the voxel model as .OBJ and .MTL files. Our output is compatible with modeling software like Rhino, Blender, and more.",
                video: "/step5.mp4",
                reverse: false,
              },
            ].map((step, i) => (
              <motion.div
                key={`step-${i}`}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                className={`flex flex-col ${
                  step.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-8`}
              >
                <div className="w-full lg:w-1/2 h-[40vh] bg-gray-100 rounded-lg border border-gray-200 overflow-hidden">
                  <video
                    src={step.video}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Showcase Section */}
        <motion.section
          id="showcase"
          className="w-[90%] mx-auto py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-semibold text-indigo-700 mb-10 text-center"
          >
            Design Showcase
          </motion.h2>

          {/* Small Thumbnails */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full h-[40vh] border border-gray-200 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden"
              >
                <img
                  src={`/art${i + 1}.png`}
                  alt={`Thumbnail ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Big Highlighted Images */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {[1, 2].map((i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full h-[80vh] border border-gray-200 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden"
              >
                <img
                  src={`/bigart${i}.jpg`}
                  alt={`Highlighted Image ${i}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          id="experience"
          className="w-[90%] mx-auto py-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-indigo-700 mb-4">
            Experience Online
          </h2>

          <div className="mb-6">
            <a
              href="https://winkietian.com/04/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-indigo-600 underline"
            >
              https://winkietian.com/04/
            </a>
          </div>

          <div className="max-w-2xl mx-auto text-gray-700 text-base leading-relaxed mb-12">
            <p className="mb-2">
              Our generative tool is now available online! You can upload your
              own section drawings and experience the full pipeline directly in
              your browser.
            </p>
            <p>
              While still under development, the tool supports essential
              features with responsive visual feedback throughout.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto text-lg text-left text-gray-800">
            {[
              [
                "🖼️",
                "Image Upload",
                "upload any black & white section drawing",
              ],
              [
                "🎯",
                "Optimize",
                "auto-crop and center the visual for voxel input",
              ],
              ["🔄", "Transform", "generate voxel models with a single click"],
              [
                "🎨",
                "Colorize",
                "apply pseudo-color based on height or layers",
              ],
            ].map(([icon, title, desc], i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-2xl">{icon}</span>
                <p>
                  <strong className="text-indigo-600">{title}</strong> – {desc}
                </p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </>
  );
}

export default App;
