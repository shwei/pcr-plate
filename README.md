# PCR Plate

The sample client-side app allows a scientist to input sample information associated with a 96-well PCR plate:
![PCR Plate alt](http://www.cellsignet.com/media/plates/96.jpg "PCR Plate")
(Image source: http://www.cellsignet.com/media/plates/96.jpg).

1. A blank schematic of the 96-well plate is rendered by using CSS.

2. Provides the following entry fields to associate information with a well on the plate:
 * Well Location (e.g. A1, B12, C4, H9, etc. - note that row names are A-H and column names are 1-12)
 * Reaction Time (in minutes - minimum 5 minutes; maximum 90 minutes)
 * Sample Name (limit 64 characters of Alpha numeric input)
   
3. Clicking on a plate well will populate the entry fields with the associated values; clicking an empty well
will fill in the Well Location field only

4. Provide Add/Remove buttons
 * Clicking the Add button will associate the values in the entry fields with a well on the plate
 * Clicking the Remove button will clear the well on the plate
 * Adding and deleting cells causes the reaction time to be cleared to avoid accidental duplication of sample data into new cells.

5. Color the wells by sample name; for example, if you used the same sample name in all your wells, then all the wells
will be rendered with the same color. If you used three unique sample names across the plate, then each well would have
one of three colors, depending on the associated sample name. You may choose whatever color set you'd like.

6. Extra credit: show reaction time 

7. Extra credit: show a unique 3-letter code for each well