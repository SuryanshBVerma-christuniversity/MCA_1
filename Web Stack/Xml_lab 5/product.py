from lxml import etree

# Load XML and XSL files
xml_tree = etree.parse("product.xml")
xsl_tree = etree.parse("product.xsl")

# Apply transformation
transform = etree.XSLT(xsl_tree)
html_result = transform(xml_tree)

# Save the HTML result to a file
with open("output.html", "wb") as html_file:
    html_file.write(etree.tostring(html_result, pretty_print=True))
