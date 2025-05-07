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
            Turn 2D Images into 3D Printable Voxels
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
            <p className="text-xl text-gray-500">
              🔧 Video demo coming soon...
            </p>
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
          className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full h-[40vh] border border-gray-200 rounded-lg overflow-hidden mb-4">
              <img
                src="/voxel.jpg"
                alt="Voxel Example"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-indigo-600 font-semibold mb-2">
              1. Lack of Structured Image-to-Voxel Creation
            </p>
            <p className="text-sm text-gray-600 px-2">
              Most tools convert 2D images into surface meshes or reliefs, but
              few generate true volumetric voxel models with spatial depth. This
              limits both structural integrity and creative reinterpretation in
              3D printing workflows.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full h-[40vh] border border-gray-200 rounded-lg bg-gray-100 mb-4" />
            <p className="text-sm text-indigo-600 font-semibold mb-1">
              2. Minimal Control in Existing Voxel Generators
            </p>
            <p className="text-sm text-gray-600">
              Current voxel tools offer limited parameters, often producing
              fixed results with minimal user intervention. Our system allows
              real-time adjustments of resolution, voxel size, and depth
              logic—turning passive conversion into active design.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full h-[40vh] border border-gray-200 rounded-lg bg-gray-100 mb-4" />
            <p className="text-sm text-indigo-600 font-semibold mb-1">
              3. Disjointed Path from Creation to Fabrication
            </p>
            <p className="text-sm text-gray-600">
              Translating voxel art into 3D-printable objects typically requires
              external software and format handling. Our tool simplifies this
              pipeline by generating fabrication-ready voxel models within a
              single interface.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full h-[40vh] border border-gray-200 rounded-lg bg-gray-100 mb-4" />
            <p className="text-sm text-indigo-600 font-semibold mb-1">
              4. Missing Visual Expressiveness in Voxel Workflows
            </p>
            <p className="text-sm text-gray-600">
              Voxel-based platforms rarely support creative expression through
              visual manipulation. We introduce interactive controls for depth
              scaling, color-based filtering, and spatial inversion—enabling
              users to shape both form and aesthetic.
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

          <div className="space-y-12">
            {[
              {
                title: "Step 1: Input Preprocessing",
                desc: "We begin by collecting 2D sectional inputs and converting them into normalized grayscale images. The system aligns and standardizes resolution before feature extraction.",
                placeholder: "Image or Diagram 1",
                reverse: false,
              },
              {
                title: "Step 2: Diffusion-based Generation",
                desc: "A fine-tuned latent diffusion model generates voxel-based 3D forms using the preprocessed inputs. LoRA and ControlNet modules guide the generation toward architectural logic and continuity.",
                placeholder: "Image or Diagram 2",
                reverse: true,
              },
              {
                title: "Step 3: 3D Reconstruction",
                desc: "The voxel field is reconstructed into high-resolution 3D models using Marching Cubes algorithm. Models can be exported as meshes for further spatial analysis or fabrication.",
                placeholder: "Image or Diagram 3",
                reverse: false,
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                className={`flex flex-col ${
                  step.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-8`}
              >
                <div className="w-full lg:w-1/2 h-[30vh] bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center">
                  <p className="text-gray-400">{step.placeholder}</p>
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

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full h-[40vh] border border-gray-200 rounded-lg bg-gray-100 flex items-center justify-center"
              >
                <p className="text-gray-400">Result Thumbnail {i + 1}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {[1, 2].map((i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full h-[80vh] border border-gray-200 rounded-lg bg-gray-100 flex items-center justify-center"
              >
                <p className="text-gray-400 text-lg">Highlighted Image {i}</p>
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
