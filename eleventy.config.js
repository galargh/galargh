import tailwindcss from '@tailwindcss/postcss';
import postcss from 'postcss';

export default async function(config) {
	config.setInputDirectory("src");
	config.setOutputDirectory("_site");

  config.addTemplateFormats("svg");
  config.addTemplateFormats("png");
  config.addTemplateFormats("css");
  config.addTemplateFormats("md");

  config.addExtension('css', {
    outputFileExtension: 'css',
    compile: async (inputContent, inputPath) => {
      console.log(inputPath);

      return async () => {
        let output = await postcss([
          tailwindcss(),
        ]).process(inputContent, { from: inputPath });

        return output.css;
      }
    }
  });
};
